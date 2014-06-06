export default Ember.Component.extend({
  actions: {
    follow: function(user){
      var yourself = this.get('session.user');
      console.log(yourself);
      if(user !== yourself){ //(later)Need to check if already following
        var followUser = this.get('controller.store').createRecord('followership',{
          follower: yourself.id,
          followee: user.id
        });
        followUser.save().then(
          function(){
            console.log('success');
          },
          function(){
            console.log('failed');
          }
        );
      }
    }
  }
});