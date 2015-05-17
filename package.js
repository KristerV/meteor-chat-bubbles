Package.describe({
  name: 'kristerv:chat-bubble',
  version: '0.0.1',
  summary: 'Chat with your potential customer',
  git: '',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2')
  api.use(["templating", "mquandalle:jade@0.4.3", "less"], "client");
  api.use('iron:router')
  api.use('raix:handlebar-helpers@0.2.4')
  api.use('artwells:accounts-guest')
  api.addFiles('chat-bubble.js')
  api.addFiles('collections.js')
  api.addFiles('ChatBubbleConfig.js')
  api.addFiles('router.js')
  api.addFiles(['view/chatBubbles.jade', 'view/chatBubbles.less', 'view/chatBubbles.js'], 'client')
  api.export('ChatBubblesCollection')
})

Package.onTest(function(api) {
  api.use('tinytest')
  api.use('kristerv:chat-bubble')
  api.addFiles('chat-bubble-tests.js')
})
