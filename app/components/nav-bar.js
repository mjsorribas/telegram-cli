export default Ember.Component.extend({
  actions: {
    logout: function(){
      this.set('session.user', null);
      this.sendAction('logout');
      // this.get('controller').transitionToRoute('auth.login');
    }
  }
});