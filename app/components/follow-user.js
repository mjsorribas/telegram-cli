export default Ember.Component.extend({

  isYou: function(){
    return this.get('user') === this.get('session.user');
  }.property('user', 'session.user'),

  actions: {
    followUnfollow: function(){
      this.sendAction('action', this.get('param'));
    }
  }
  
});