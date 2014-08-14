export default Ember.Component.extend({
  actions: {
    logout: function(){
      this.set('session.user', null);
      this.sendAction('logout');
    }
  }
});