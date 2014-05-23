var PostsController = Ember.ArrayController.extend({
  body: null,
  actions:{
    publishPost: function(){
      var self = this;
      var body = this.get('postBody');
      if(body){
        var post = this.store.createRecord('post',{
          body: body,
          user: this.get('session').user
        });
        post.save().then(function(){
          self.set('postBody', '');
        });
      } 
    },
    removePost: function(item) {
      item.deleteRecord();
      item.save();

      // item.destroyRecord();
    }
  }
});

export default PostsController;