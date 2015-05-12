ChatBubblesCollection = new Meteor.Collection('chat-bubbles');

Router.configure({
	/*waitOn: function() {
		return Meteor.subscribe('chat-bubbles')
	}*/
})

if (Meteor.isServer) {
	Meteor.publish('chat-bubbles')
	ChatBubblesCollection.allow({
		insert: function (userId, doc) {
			return !ChatBubblesCollection.findOne({userId: userId})
		},
		update: function (userId, doc, fields, modifier) {
			return false
		},
	});
}
