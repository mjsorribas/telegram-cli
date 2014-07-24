var UserController = Ember.ObjectController.extend({
  isYou: function(){
    // console.log(' ========= isYou ==========');
    // console.log(this.get('model'));
    // console.log(this.get('session.user'));
    return this.get('model') === this.get('session.user');
  }.property('model', 'session.user'),
});

export default UserController;