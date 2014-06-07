export default Ember.Component.extend({
  actions: {
    follow: function(user){
      var yourself = this.get('session.user');
      if(user !== yourself){ //(later)Need to check if already following
        var followUser = this.get('controller.store').createRecord('followership',{ //Uncaught TypeError: Cannot read property 'createRecord' of undefined 
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