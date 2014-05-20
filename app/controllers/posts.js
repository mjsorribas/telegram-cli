var PostsController = Ember.ArrayController.extend({
  actions:{
    publishPost: function(){
      // authenticated user

      // var body = this.get('postBody');
      // var post = this.store.createRecord('post',{
      //   body: body,
      //   user: user
      // });
      // this.set('postBody', '');
      // post.save();
    }
  }
});

export default PostsController;