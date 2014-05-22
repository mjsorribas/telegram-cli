var AuthLoginController = Ember.ObjectController.extend({
  username: null,
  password: null,

  actions: {
    login: function(){
      // Get the input values from Login form
      var userInfo = this.getProperties('username', 'password');
      // Find the model that matches username & password
      if(userInfo.username && userInfo.password ){
        var self = this;
        // Check if the user's input (username & password) matches the record
        this.store.find('user', userInfo.username)
        .then(function(authenticatedUser){
          if(userInfo.password === authenticatedUser.get('password')){
            self.set('session.user', authenticatedUser);
            self.transitionToRoute('posts');
          } else {
            alert('Something went wrong, try again');
          }  
        },
        function(){
          alert('Requested user does not exist in our database, please check and try again');
        });
      } else {
        alert('Fill out everything');
      }

      // Clear input fields
      this.setProperties({
        'username': '',
        'password': ''
      });
    }
  }

});

export default AuthLoginController;