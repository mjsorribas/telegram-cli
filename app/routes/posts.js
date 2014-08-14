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
    this._super(controller, model);
    var that = this;
    controller.set('newPosts', this.store.filter('post', 
    	function(post) { 
    		return post.get('user') === that.get('session.user'); 
  		}
  	));
  },
  actions: {
    yesRepost: function(post){
      Ember.Logger.debug("Reposting of the post: ", post);
      var self = this;
      var authenticatedUser = this.get('session.user');
      Ember.Logger.debug('body of the post: ', post.get('body'));
      Ember.Logger.debug('user of the post: ', post.get('user'));
      Ember.Logger.debug('authenticated user: ', authenticatedUser);
      var newPost = this.store.createRecord('post',{
        body: post.get('body'),
        user: authenticatedUser,
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