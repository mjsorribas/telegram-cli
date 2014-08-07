var PostsRoute = Ember.Route.extend({
  beforeModel: function(){
    if(!this.get('session.user')) {
      this.transitionTo('auth.login');
    }
  },
  model: function(){
    return this.store.find('post', {followeesOf: this.get('session.user.id')});
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    // Implement your custom setup after
    var that = this;
    controller.set('newPosts', this.store.filter('post', 
    	function(post) { 
    		return post.get('user') == that.get('session.user'); 
  		}
  	));
  }
});
export default PostsRoute;