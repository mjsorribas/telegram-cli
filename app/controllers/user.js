var UserController = Ember.ObjectController.extend({
  isYou: function(){
    return this.get('model') === this.get('session.user');
  }.property('model', 'session.user'),
});

export default UserController;