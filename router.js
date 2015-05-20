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
		if (!Meteor.user() || admin)
			return false

		// Create new chat
		if (!ChatBubblesCollection.findOne({authorId: Meteor.userId(), archived: {$in: [null, false]}})) {
			var guest = Meteor.user().profile.guest
			if (!admin && guest) {
				ChatBubblesCollection.insert({
					authorId: Meteor.userId(), 
					messages: [], 
					createdAt: new Date()
				})
			}
		}
	},
})
