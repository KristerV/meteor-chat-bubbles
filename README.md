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

info
	Admin acts as a single person. So two admins can pretend to be the support person at the same time.
	using cleanup means you delete(empty && offline) and archive(old && offline). There is currently no way to see the archived chats, but straight from the database. Also, archived chats are not reinstated when the same user returns, because perhaps it's a new user and private information can't be shown.

TODO
	signed in users only see chats at correct route
	image is hidden at first and gets animated in with chat.

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