ChatBubbles is a [Meteor.js](http://meteor.com) chat app that enables you to talk to your potential customers. Basically you can have a chat bubble for the guests on the front page:

![client chat](/readme/client.gif)

and a chat admin view with client status shown and notifications.

![Admin view](/readme/admin.png)

## Installing

    meteor add kristerv:chat-bubbles

## Using

1. For the client either use {{> chatBubbles}} or this.render('chatBubbles')
2. The admin view is at route `/chatBubbles`.
3. Make the user admin with `Roles.addUsersToRoles(userId, ['admin'])`
4. [Custom config](#custom-config)

### Admin view

The admin view is shared by all admins and the client you're speaking to can't differenciate between many. This is by design to keep the customer experience simple. Keep this in mind so you don't have more than one person talking at any one time.

### Archive old

There is a button in the admin view at the bottom of the page that cleans up old chats.

![archive](/readme/archive.png)

What this button does:

1. Deletes any completely empty messages  
2. Archives any old messages.

**This only affects chats with offline users**

How old is old can be determined with [ChatBubbles.hoursOld](#custom-config)

## Custom config

Here are all the non-CSS customization options

    ChatBubblesDefaults = {
    	image: "",
    	hoursOld: 2,
    	appName: ""
    }

- **image**: the image that you want to display next to the client chat. At the moment only one is supported.
- **hoursOld**: When pressing the "Archive old" button, how many hours is old?
- **appName**: Displayed on top of the notifications.

## Styling

### Modify some styling

To style elements just override the CSS. 

### Complete redesign

To remove all styling from the chat use 

    {{> chatBubbles style="unstyled"}} 

or 

    this.render('chatBubbles', {data: {style: "unstyled"}});

## Packages in use

- mquandalle:jade
- iron:router
- artwells:accounts-guest
- alanning:roles
- mizzao:user-status
- momentjs:moment

## ToDo

- Tests
- Statistics (what starting words have more success, how many guests want to chat, how many give their email)
- yogiben:admin integration