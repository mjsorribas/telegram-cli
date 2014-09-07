export default Ember.Component.extend({

  isYou: function(){
    return this.get('user.id') === this.get('session.user.id');
  }.property('user', 'session.user'),

  actions: {
    followUnfollow: function(){
      this.sendAction('action', this.get('param'));
    }
  }
  
});