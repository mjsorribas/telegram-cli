var AuthRegisterController = Ember.ObjectController.extend({
  // content: {},
  actions: {
    register: function(){
      // Get the input values from Register form
      var user_info = this.getProperties('name', 'username', 'email', 'password');

      // Create a new user model
      // If the input has empty, give error message
      if(user_info.name     !== undefined &&  
         user_info.username !== undefined &&  
         user_info.email    !== undefined &&  
         user_info.password !== undefined){
        var user = this.store.createRecord('user', {
          name:     user_info.name,
          username: user_info.username,
          email:    user_info.email,
          password: user_info.password
        });

        // Save this user model
        user.save();

        this.transitionToRoute('auth.login');
      } else {
        alert('Fill out eveything');
      }

      // Clear input fields
      this.setProperties({
        'name':     '',
        'username': '',
        'email':    '',
        'password': ''
      });

    }
  }

});

export default AuthRegisterController;