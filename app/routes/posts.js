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
    		return post.get('user') === that.get('session.user'); 
  		}
  	));
  },
  actions: {
    yesRepost: function(post){
      // console.log("yes reposting");
      // console.log(post);
      var self = this;
      var authenticatedUser = this.get('session.user');
      // console.log('body '+post.get('body'));
      // console.log('user '+post.get('user'));
      // console.log('auser '+authenticatedUser);
      var newPost = this.store.createRecord('post',{
        body: post.get('body'),
        user: authenticatedUser,//post.get('user'),
        originalAuthor: post.get('user'),
        date: new Date()
      });
      newPost.save().then(function(){
        self.set('confirmRepost', false);
        return newPost;
      });
    }
  }
});
export default PostsRoute;