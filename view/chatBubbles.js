Template.chatBubbles.helpers({
	userIsAdmin: function(){
		return Roles.userIsInRole(Meteor.userId(), 'admin')
	},
	chatBubbles: function() {
		return ChatBubblesCollection.find()
	},
	authorAdmin: function() {
		return this.role == 'admin'
	}
})

Template.chatBubbles.events({
	'submit form[name="chatBubblesNewMessage"]': function (e) {
		e.preventDefault()
		var chatId = $(e.currentTarget).parents('.chatBubbles-bubble[data-chat-id]').first().attr('data-chat-id')
		var msg = $(e.currentTarget).find('input[name="msg"]').val()
		$(e.currentTarget).find('input[name="msg"]').val("")

		var data = {
			msg: msg,
			authorId: Meteor.userId(),
			role: Roles.userIsInRole(Meteor.userId(), 'admin') ? 'admin' : 'guest',
		}
		ChatBubblesCollection.update(chatId, {$push: {messages: data}})
	}
});