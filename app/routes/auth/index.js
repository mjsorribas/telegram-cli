var AuthIndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('auth.register');
  }
});
export default AuthIndexRoute;