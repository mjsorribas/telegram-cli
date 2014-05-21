var AuthLoginController = Ember.ObjectController.extend({
  username: null,
  password: null,

  actions: {
    login: function(){
      // Get the input values from Login form
      var userInfo = this.getProperties('username', 'password');
      // Find the model that matches username & password
      if(userInfo.username !== null && 
         userInfo.password !== null){

        // Check if the user's input (username & password) matches the record
        var authenticatedUser = this.store.find('user', userInfo.username);

        if(userInfo.password === authenticatedUser.password){
          this.transitionToRoute('posts');
        } else {
          alert('Check your username/password');
        }
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