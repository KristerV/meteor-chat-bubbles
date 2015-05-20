ChatBubblesDefaults = {
	image: "",
	hoursOld: 2,
	appName: ""
}

ChatBubblesGet = function(item) {
	return ChatBubbles[item] ? ChatBubbles[item] : ChatBubblesDefaults[item]
}

ChatBubblesNotify = function(message) {

	var user = Meteor.user()
	if (!user || !user.status || !user.status.idle) {
		return false
	}

	if (!Roles.userIsInRole(user._id, 'admin'))
		return false

	Notification.requestPermission( function(status) {
		var n = new Notification(ChatBubblesGet("appName"), {body: message})
		n.onshow = function () { 
			setTimeout(n.close.bind(n), 4000);
		}
		n.onclick = function (e) {
		    window.focus();
		};
	});
}