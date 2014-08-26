var AuthAccountRoute = Ember.Route.extend({

  beforeModel: function(){
    if(!this.get('session.user')) {
      this.transitionTo('auth.login');
    }
  },

  model: function() {  
    Ember.Logger.debug('Loading user for account!!!');
    return this.store.find("user", {selfusername: this.get('session.user.id')});
  }
});
export default AuthAccountRoute;