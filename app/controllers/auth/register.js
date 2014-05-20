var AuthRegisterController = Ember.ObjectController.extend({
  content: {},
  actions: {
    register: function(){
      // Get the input values from Register form
      var userInfo = this.getProperties('name', 'username', 'email', 'password');

      // Create a new user model
      // If the input has empty, give error message
      if(userInfo.name     !== undefined &&  
         userInfo.username !== undefined &&  
         userInfo.email    !== undefined &&  
         userInfo.password !== undefined){
        var user = this.store.createRecord('user', {
          name:     userInfo.name,
          username: userInfo.username,
          email:    userInfo.email,
          password: userInfo.password
        });

        // Save this user model & redirect to posts page if it went success
        var self = this;

        var onSuccess = function(){
          self.transitionToRoute('posts');
        };
        
        var onFail = function(){
          alert('Something went wrong try again');
        };

        user.save().then(onSuccess, onFail);

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