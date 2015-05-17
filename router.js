Router.route('/chatBubbles')

Router.configure({
	waitOn: function() {
		return Meteor.subscribe('chatBubbles', Meteor.userId())
	},
	onAfterAction: function () {
		var admin = Roles.userIsInRole(Meteor.userId(), 'admin')
		if (!admin)
			ChatBubblesCollection.insert({authorId: Meteor.userId(), messages: []});
	},
})