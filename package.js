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
  api.addFiles('chat-bubble.js')
  api.addFiles('collections.js')
  api.addFiles('ChatBubble.js')
  api.addFiles(['view/chatBubble.jade', 'view/chatBubble.less', 'view/chatBubble.html'], 'client')
})

Package.onTest(function(api) {
  api.use('tinytest')
  api.use('kristerv:chat-bubble')
  api.addFiles('chat-bubble-tests.js')
})
