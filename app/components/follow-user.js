export default Ember.Component.extend({
actions: {
    followUnfollow: function(){
      console.log(' ');
      console.log('====== Follow ======');
      console.log('======== param ========= ' + this.get('param'));
      this.sendAction('action', this.get('param'));
    }
  }
});