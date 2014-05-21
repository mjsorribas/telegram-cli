var AuthLoginController = Ember.ObjectController.extend({
  // content: {},  instead
  username: null,
  password: null,

  actions: {
    login: function(){
      // Get the input values from Login form
      var userInfo = this.getProperties('username', 'password');
      // Find the model that matches username & password
      if(userInfo.username !== null && 
         userInfo.password !== null){

        var authenticatedUser = this.store.find('user', 'will');

        if(authenticatedUser){
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