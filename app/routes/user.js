var UserRoute = Ember.Route.extend({
  model: function(user){
    return this.store.find('user', user.username);
  },
  afterModel: function(user){
  	var loggedInUser = this.get('session.user');
  	console.log('======= Before Model Call ======');
  	console.log('loggedInUser: '+loggedInUser);
  	var username = user.id;
  	console.log('username: '+username);
    return $.ajax({
      url: '/api/users/'+username,
      type: 'GET',
      dataType: 'json',
      data: {},//follower: loggedInUser.id
      success: function(response) {
        console.log('response: ' + response);
      },
      error: function() {
        console.log('Error');
      }
    });
  }
});
export default UserRoute;