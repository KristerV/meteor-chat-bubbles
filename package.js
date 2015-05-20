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
  api.use('artwells:accounts-guest@0.1.5')
  api.use('alanning:roles@1.2.13')
  api.use('mizzao:user-status@0.6.4')
  api.use('momentjs:moment@2.10.3')
  api.addFiles('chat-bubble.js')
  api.addFiles('collections.js')
  api.addFiles('ChatBubblesConfig.js')
  api.addFiles('methods.js', 'server')
  api.addFiles('router.js')
  api.addFiles(['view/chatBubbles.jade', 'view/chatBubbles.less', 'view/chatBubbles.js'], 'client')
  api.export('ChatBubblesCollection')
  api.export('moment')
})

Package.onTest(function(api) {
  api.use('tinytest')
  api.use('kristerv:chat-bubble')
  api.addFiles('chat-bubble-tests.js')
})
