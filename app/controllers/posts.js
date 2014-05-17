var PostsController = Ember.ArrayController.extend({
  actions:{
    publishPost: function(){
      var user = {
        id: 4,
        name: 'Gal Gagot',
        username: 'gal',
        email: 'gal@example.com',
        password: 'password'
      };
      var body = this.get('postBody');

//       this.store.find('user', 4).then(function(user){
//         body.set('user', user);
//         user.get('posts').push(body);
//       });
// console.log(this);
      var post = this.store.createRecord('post',{
        body: body,
        user: user
      });
      this.set('postBody', '');
      post.save();
    }
  }
});

export default PostsController;