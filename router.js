Router.route('/chatBubbles', function(){
	this.render('chatBubbles')
})
Router.configure({
	waitOn: function() {
		return [
				Meteor.subscribe('chatBubbles', Meteor.userId()),
				Meteor.subscribe('users', Meteor.userId()),
			]
	},
	onAfterAction: function () {
		var admin = Roles.userIsInRole(Meteor.userId(), 'admin')
		if (!Meteor.user())
			return false

		// Create new chat
		var guest = Meteor.user().profile.guest
		if (!admin && guest) {
			ChatBubblesCollection.insert({
				authorId: Meteor.userId(), 
				messages: [], 
				createdAt: new Date()
			})
		}
	},
})
