var AuthRegisterController = Ember.ObjectController.extend({
  // content: {},  instead
  name:     null,
  username: null,
  email:    null,
  password: null,
  error: false,
  errorMessage: null,

  actions: {
    register: function(){
      this.set('errorMessage', null);
      // Get the input values from Register form
      var userInfo = this.getProperties('name', 'username', 'email', 'password');

      var isValidEmail = function(email){
        var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return regex.test(email);
      };

      var isValidPassword = function(password){
        return password.length >= 6;
      };

      if(!isValidEmail(userInfo.email)){
        if(!isValidPassword(userInfo.password)){
          this.set('error', true);
          this.set('errorMessage', 'Invalid email & too short password');
        } else{
          this.set('error', true);
          this.set('errorMessage', 'Invalid email');
        }
      } else if(!isValidPassword(userInfo.password)){
        this.set('error', true);
        this.set('errorMessage', 'Password must be at least 6 characters');
      } else if(userInfo.name &&
        userInfo.username &&
        isValidEmail(userInfo.email) &&
        isValidPassword(userInfo.password)){
        
        var newUser = this.store.createRecord('user', {
          id:       userInfo.username,
          name:     userInfo.name,
          email:    userInfo.email,
          password: userInfo.password
        });

        var self = this;

        var onSuccess = function(){
          self.set('session.user', newUser);
          self.transitionToRoute('posts');
          // Clear input fields
          self.setProperties({
            'name':     '',
            'username': '',
            'email':    '',
            'password': ''
          });
        };
        
        var onFail = function(){
          self.set('error', true);
          self.set('errorMessage', 'Something is wrong here, try again');
        };

        newUser.save().then(onSuccess, onFail);

      } else {
        this.set('error', true);
        this.set('errorMessage', 'Please fill out everything');
      }
    }
  }

});

export default AuthRegisterController;