Template.chatBubbles.helpers({
	userIsAdmin: function(){
		return Roles.userIsInRole(Meteor.userId(), 'admin')
	},
	userIsGuest: function(){
		var user = Meteor.user()
		if (!user || !user.profile)
			return false
		return user.profile.guest
	},
	chatBubbles: function() {
		var find = ChatBubblesCollection.find({}, {sort: {createdAt: -1}})
		find.observeChanges({
			changed: function (id, fields) {
				ChatBubblesNotify("New message")
				setTimeout(function(){
					$('.chatBubbles-bubble[data-chat-id="'+id+'"] .chatBubbles-msgs-container').scrollTop(9999)
				}, 10)
			},
		});
		var aMinuteAgo = moment().subtract(1, 'minutes').toDate()
		var alertColl = ChatBubblesCollection.find({createdAt: {$gt: aMinuteAgo}})
		alertColl.observeChanges({
			added: function (id, fields) {
				ChatBubblesNotify("New client chat")
			},
		})
		return find
	},
	chatBubblesExist: function(){
		return ChatBubblesCollection.find().fetch()
	},
	authorAdmin: function() {
		return this.role == 'admin'
	},
	showBubble: function(){
		return Roles.userIsInRole(Meteor.userId(), 'admin') || this.messages.length > 0
	},
	timestamp: function(){
		return moment(this.createdAt).calendar()
	},
	profileImageSource: function() {
		return ChatBubblesGet("image")
	},
	status: function() {
		var user = Meteor.users.findOne(this.authorId)
		if (!user || !user.status)
			return false

		if (user.status.idle)
			return "idle"
		else if (user.status.online)
			return "online"
		else
			return "offline"
	},
	underScreen: function() {
		var notAdmin = !Roles.userIsInRole(Meteor.userId(), 'admin')
		var noChatExists = !ChatBubblesCollection.findOne({
			archived: {$in: [null, false]}, // is not archived
			'messages.0': {$exists: true}}) // At least one message exists
		return notAdmin && noChatExists
	}
})

Template.chatBubbles.events({
	'submit form[name="chatBubblesNewMessage"]': function (e) {
		e.preventDefault()
		var chat = $(e.currentTarget).parents('.chatBubbles-bubble[data-chat-id]').first()
		var chatId = chat.attr('data-chat-id')
		var msg = $(e.currentTarget).find('input[name="msg"]').val()
		$(e.currentTarget).find('input[name="msg"]').val("")

		var data = {
			msg: msg,
			authorId: Meteor.userId(),
			role: Roles.userIsInRole(Meteor.userId(), 'admin') ? 'admin' : 'guest',
			createdAt: new Date(),
		}
		ChatBubblesCollection.update(chatId, {$push: {messages: data}}, function(){
			chat.find('.chatBubbles-msgs-container').scrollTop(9999)
		})
	},
	'click button[name="archive-old"]': function() {
		Meteor.call('cleanChats')
	}
});


Template.chatBubbles.rendered = function () {
	// Start idle monitor 
	// https://github.com/mizzao/meteor-user-status/
	Deps.autorun(function(c){
		try {
			UserStatus.startMonitor({threshold: 30000,interval:5000,idleOnBlur:true});
		} catch(err) {}
	})
};