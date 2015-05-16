ChatBubblesCollection = new Meteor.Collection('chatBubbles');

Router.configure({
	waitOn: function() {
		return Meteor.subscribe('chatBubbles', Meteor.userId())
	}
})

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
			return !ChatBubblesCollection.findOne({userId: userId})
		},
		update: function (userId, doc, fields, modifier) {
			console.log("----------------------------------")
			console.log(userId)
			console.log(doc)
			console.log(fields)
			console.log(modifier)
			return false
		},
	});
}