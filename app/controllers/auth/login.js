var AuthLoginController = Ember.ObjectController.extend({
  // content: {},  instead
  id: null,
  password: null,

  actions: {
    login: function(){
      // Get the input values from Login form
      var userInfo = this.getProperties('id', 'password');
      var authenticatedUser;

      // Find the model that matches username & password
      if(userInfo.id !== undefined && 
         userInfo.password !== undefined){

        authenticatedUser = this.store.find('user', 'will');
        if(authenticatedUser){
        // if(userInfo.username === 'will' && 
        //    userInfo.password === 'password'){
          // Transition to posts page
          this.transitionToRoute('posts');
        } else {
          alert('Check your username/password');
        }
      } else {
        alert('Fill out everything');
      }

      // Clear input fields
      this.setProperties({
        'id': '',
        'password': ''
      });
    }
  }

});

export default AuthLoginController;