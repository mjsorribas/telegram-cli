var AuthRegisterController = Ember.ObjectController.extend({
  // content: {},  instead
  name:     null,
  id:       null,
  email:    null,
  password: null,

  actions: {
    register: function(){
      // Get the input values from Register form
      var userInfo = this.getProperties('name', 'id', 'email', 'password');

      // Create a new user model
      // If the input has empty, give error message
      if(userInfo.name     !== undefined &&  
         userInfo.id !== undefined &&  
         userInfo.email    !== undefined &&  
         userInfo.password !== undefined){
        var user = this.store.createRecord('user', {
          name:     userInfo.name,
          id:       userInfo.id,
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