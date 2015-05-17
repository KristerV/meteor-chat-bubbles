uses
	mquandalle:jade
	iron:router
	raix:handlebar-helpers
	artwells:accounts-guest

setup
	add user to admin
	+chatBubbles for the user
	admin goes to /chatBubbles

TODO
	face image and name
	timestampts for msgs
	status
	delete((old || empty) && offline)
	archive(old && !empty && offline) (new insert allowed)
	only admin on chatBubbles route

TODO nice to have
	statistics
		what starting words have more success
		how many reply
		how many give email
	yogiben:admin