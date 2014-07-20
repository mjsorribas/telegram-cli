var BadRoute = Ember.Route.extend({
  redirect: function(){
  	this.transitionTo('posts');
  }
});
export default BadRoute;