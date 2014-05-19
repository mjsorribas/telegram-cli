var RegisterController = Ember.ArrayController.extend({
  actions: {
    register: function(){
      // Get the input values from Register form
      var user_info = this.getProperties('name', 'username', 'email', 'password');

      // Create a new user model
      var user = this.store.createRecord('user', {
        name:     user_info.name,
        username: user_info.username,
        email:    user_info.email,
        password: user_info.password
      });

      // Clear input fields
      this.setProperties({
        'name':     '',
        'username': '',
        'email':    '',
        'password': ''
      });

      // Save this user model
      user.save();

      this.transitionToRoute('login');
    }
  }

});

export default RegisterController;