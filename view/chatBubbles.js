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