export default Ember.Component.extend({
  isYou: function(){
    return this.get('user') === this.get('session.user');
  }.property('user', 'session.user'),
	actions: {
    followUnfollow: function(){
      // console.log(' ');
      // console.log('====== Follow ======');
      // console.log('======== param ========= ' + this.get('param'));
      this.sendAction('action', this.get('param'));
    }
  }
});