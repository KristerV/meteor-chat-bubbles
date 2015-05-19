ChatBubblesDefaults = {
	image: "",
	hoursOld: 2,
}

ChatBubblesGet = function(item) {
	return ChatBubbles[item] ? ChatBubbles[item] : ChatBubblesDefaults[item]
}