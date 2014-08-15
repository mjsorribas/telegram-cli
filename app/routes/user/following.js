var UserFollowingRoute = Ember.Route.extend({

  beforeModel: function(){
    if(!this.get('session.user')) {
      this.transitionTo('auth.login');
    }
  },

  model: function(){
    var currentURLuser = this.modelFor('user');
    
    return this.store.find("user",
      {
        follower: currentURLuser.id
        // skip: 40,
        // limit: 20
      }
    );
  }

});
export default UserFollowingRoute;