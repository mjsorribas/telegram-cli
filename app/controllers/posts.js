var PostsController = Ember.ArrayController.extend({
  actions:{
    createPost: function(){
      var body = this.get('postBody');
      var post = this.store.createRecord({
        body: body
      });
      this.set('postBody', '');
      post.save();
    }
  }
});

export default PostsController;