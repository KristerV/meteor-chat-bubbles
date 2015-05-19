Template.chatBubbles.helpers({
	userIsAdmin: function(){
		return Roles.userIsInRole(Meteor.userId(), 'admin')
	},
	chatBubbles: function() {
		var find = ChatBubblesCollection.find({}, {sort: {createdAt: -1}})
		find.observeChanges({
			changed: function (id, fields) {
				Meteor.setTimeout(function(){
					$('.chatBubbles-bubble[data-chat-id="'+id+'"] .chatBubbles-msgs-container').scrollTop(9999)
				}, 10)
			},
		})
		return find
	},
	authorAdmin: function() {
		return this.role == 'admin'
	},
	showInput: function(){
		return Roles.userIsInRole(Meteor.userId(), 'admin') || this.messages.length > 0
	},
	timestamp: function(){
		return moment(this.createdAt).calendar()
	},
	profileImageSource: function() {
		return ChatBubblesConfig.image
	},
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

	}
});
