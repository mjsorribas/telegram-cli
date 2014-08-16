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

    var _this = this;

    controller.set('newPosts', this.store.filter('post', 
      function(post) { 
        return post.get('user') === _this.get('session.user'); 
      }
    ));
  },

  actions: {
    yesRepost: function(post){
    
      var _this = this;
      var authUser = this.get('session.user');

      Ember.Logger.debug("Reposting of the post: ", post, post.get('body'), post.get('user'), authUser);

      var newPost = this.store.createRecord('post',{
        body: post.get('body'),
        user: authUser,
        originalAuthor: post.get('user'),
        date: new Date()
      });

      newPost.save().then(function(){
        _this.set('confirmRepost', false);
        return newPost;
      });
    }
  }
});
export default PostsRoute;