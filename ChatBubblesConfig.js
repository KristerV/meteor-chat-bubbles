ChatBubblesDefaults = {
	image: "",
	hoursOld: 0,
}

ChatBubblesGet = function(item) {
	return ChatBubbles[item] ? ChatBubbles[item] : ChatBubblesDefaults[item]
}