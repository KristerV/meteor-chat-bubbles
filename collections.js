ChatBubblesCollection = new Meteor.Collection('chatBubbles');

if (Meteor.isServer) {
	Meteor.publish('chatBubbles', function(userId){
		var filter = {authorId: userId}
		if (Roles.userIsInRole(userId, 'admin')) {
			filter = {}
		}
		return ChatBubblesCollection.find(filter)
	})
	ChatBubblesCollection.allow({
		insert: function (userId, doc) {
			// Allow one chat per guest
			return !ChatBubblesCollection.findOne({authorId: userId})
		},
		update: function (userId, doc, fields, modifier) {

			// Is admin
			if (Roles.userIsInRole(userId, 'admin'))
				return true

			// Is owner
			if (userId == doc.authorId)
				return true

			return false
		},
	});
}