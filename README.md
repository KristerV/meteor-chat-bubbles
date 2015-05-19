## Warning: this repo is not yet usable in your project so stay clear.
```
uses
	mquandalle:jade
	iron:router
	raix:handlebar-helpers
	artwells:accounts-guest
	mizzao:user-status

setup
	add user to admin
	+chatBubbles for the user
	admin goes to /chatBubbles
	config options

TODO
	delete((old || empty) && offline)
	archive(old && !empty && offline) (new insert allowed)
	signed in users only see chats at correct route

TODO nice to have
	statistics
		what starting words have more success
		how many reply
		how many give email
	yogiben:admin

TODO config options
	image
	name
	days to delete
	LESS customisations (use :not(.unstyled))


```