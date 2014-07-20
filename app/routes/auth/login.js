var AuthLoginRoute = Ember.Route.extend({
  redirect: function(){
  	if(this.get('session.user')) {
  		this.transitionTo('posts');
  	}
  }
});
export default AuthLoginRoute;