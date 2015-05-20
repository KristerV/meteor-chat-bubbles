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
	+chatBubbles or render(chatBubbles)
	admin goes to /chatBubbles
	config options

info
	Admin acts as a single person. So two admins can pretend to be the support person at the same time.
	using cleanup means you delete(empty && offline) and archive(old && offline). There is currently no way to see the archived chats, but straight from the database. Also, archived chats are not reinstated when the same user returns, because perhaps it's a new user and private information can't be shown.

```

ChatBubbles is a [Meteor.js](http://meteor.com) chat app that enables you to talk to your potential customers. Basically you can have a chat bubble for the guests on the front page:

![client chat](/readme/client.gif)

and a chat admin view with client status shown and notifications.

![Admin view](/readme/admin.png)

Installing
----------

    meteor add kristerv:chat-bubbles

Using
-----

1. For the client either use {{> chatBubbles}} or this.render('chatBubbles')
2. The admin view is at route `/chatBubbles`.
3. Make the user admin with Roles.addUsersToRoles(userId, ['admin']) (from package `alanning:roles`)
4. Custom config

Custom config
-------------

Here are all the non-CSS customization options

    ChatBubblesDefaults = {
    	image: "",
    	hoursOld: 2,
    	appName: ""
    }

- *image*: the image that you want to display next to the client chat. At the moment only one is supported.
- *hoursOld*: When pressing the "Archive old" button, how many hours is old?
- *appName*: Displayed on top of the notifications.

Styling
-------

To style elements just override the CSS. To remove all styling from the chat use {{> chatBubbles style="unstyled"}} or this.render('chatBubbles', {data: {style: "unstyled"}});

Packages in use
---------------

- mquandalle:jade
- iron:router
- artwells:accounts-guest
- alanning:roles
- mizzao:user-status
- momentjs:moment

ToDo
----

- Tests
- Statistics (what starting words have more success, how many guests want to chat, how many give their email)
- yogiben:admin integration