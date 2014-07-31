var PostsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('post');
  }
  // model: function() {
  //   var authenticatedUser = this.get('session.user');
  //   var that = this;
  //   return this.store.find('user', 
  //     {
  //       follower: authenticatedUser.id,
  //       limit   : 20
  //       // skip    : 20
  //     }
  //   ).then(function(users){
  //     var followingUsers = [];
  //     users.forEach(function(eachUser){
  //       if(followingUsers.indexOf(eachUser.get('id')) < 0){
  //         followingUsers.push(eachUser.get('id'));
  //       }
  //     });

  //     return that.store.filter(
  //       "post",
  //       {
  //         limit: 20
  //         // skip : 20
  //       },
  //       function(post) {
  //         var author = post.get('user.id');
  //         return followingUsers.indexOf(author) >= 0;
  //       }
  //     );
  //   });
  // }
});
export default PostsRoute;