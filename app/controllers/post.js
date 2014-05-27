var PostController = Ember.ObjectController.extend({
  isAuthor: function(){
    return this.get('user') === this.get('session').user;
  }.property('user')
});

export default PostController;