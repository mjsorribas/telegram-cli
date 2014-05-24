var PostsController = Ember.ArrayController.extend({
  // isAuthor: function(){
  //   if(this.get('session').user === this.get('post').user){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }.property('session', 'post'),

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
      if(this.get('session').user && item.get('user').id === this.get('session').user.id){
        item.deleteRecord();
        item.save();
      } else {
        console.log('Login!')
      }
    }
  }
});

export default PostsController;