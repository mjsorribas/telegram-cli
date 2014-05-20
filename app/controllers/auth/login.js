var AuthLoginController = Ember.ObjectController.extend({
  content: {},
  actions: {
    login: function(){
      // Get the input values from Login form
      var userInfo = this.getProperties('username', 'password');

      // Send the date to model
      // Ember.$.post('user', userInfo).then(function(response){
      //   alert('Hi');
      // });

      // Find the model that matches username & password
      if(userInfo.username !== undefined && 
         userInfo.password !== undefined){
        // var user = this.store.find('user', 
        //   { username: userInfo.username ,
        //     password: userInfo.password 
        //   }
        // );

        if(userInfo.username === 'a' && 
           userInfo.password === 'password'){
          // if(userInfo.username === user.username && userInfo.password === user.password){
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

export default AuthLoginController;