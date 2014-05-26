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
      if(this.get('session').user && item.get('user') === this.get('session').user){
        item.deleteRecord();
        item.save();
      } else {
        console.log("You are not this post's author");
      }
    },
    isAuthor: function(user){
      if(this.get('session').user !== null && user === this.get('session').user){
        console.log(this.get('session').user.id);
        console.log(this.get('session').user);
      } else {
        console.log('noo');
        console.log(user);
        console.log(this.get('session').user.id);
        console.log(this.get('session').user);
      }
    }

  }
});

export default PostsController;