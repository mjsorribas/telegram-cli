var AuthLoginController = Ember.ObjectController.extend({
  username: null,
  password: null,
  error: false,
  errorMessage: null,

  actions: {
    login: function(){
      this.set('errorMessage', null);
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
            self.set('error', true);
            self.set('errorMessage', 'Check your password and try again');
          }  
        },
        function(){
          self.set('error', true);
          self.set('errorMessage', "The user doesn't exist");
        });
      } else {
        this.set('error', true);
        this.set('errorMessage', 'Fill out everything');
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