if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      Meteor.call('makeadmin', Meteor.userId())
    }
  });
}

Router.route('/', function () {
  this.render('home');
  this.render('chatBubbles');
});

if (Meteor.isServer) {
  Meteor.methods({
    makeadmin: function(userId) {
      Roles.addUsersToRoles(userId, ['admin'])
    }
  })
}