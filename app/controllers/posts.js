var PostsController = Ember.ArrayController.extend({
  body: null,
  actions:{
    publishPost: function(){
      var self = this;
      var body = this.get('postBody');
      if(body){
        var post = this.store.createRecord('post',{
          body: body,
          user: this.get('session').user,
          date: new Date()
        });
        post.save().then(function(){
          self.set('postBody', '');
        });
      } 
    },
    removePost: function(item) {
      if(this.get('session').user && item.get('user') === this.get('session').user){
        item.deleteRecord();
        item.save();
      } else {
        console.log("You are not this post's author");
      }
    },
  }
});

export default PostsController;