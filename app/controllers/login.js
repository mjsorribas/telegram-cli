var LoginController = Ember.ObjectController.extend({
  content: {},
  actions: {
    login: function(){
      // Get the input values from Login form
      var user_info = this.getProperties('username', 'password');

      // Send the date to model
      // Ember.$.post('user', user_info).then(function(response){
      //   alert('Hi');
      // });

      // Find the model that matches username & password
      if(user_info.username !== undefined && 
         user_info.password !== undefined){
        // var user = this.store.find('user', 
        //   { username: user_info.username ,
        //     password: user_info.password 
        //   }
        // );

        if(user_info.username === 'a' && 
           user_info.password === 'password'){
          // if(user_info.username === user.username && user_info.password === user.password){
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
        'username': '',
        'password': ''
      });
    }
  }

});

export default LoginController;