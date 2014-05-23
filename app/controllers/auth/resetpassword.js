var AuthResetpasswordController = Ember.ObjectController.extend({
  username: null,
  email: null,
  error: false,
  errorMessage: null,

  actions: {
    sendpass: function(){
      this.set('errorMessage', null);
      var userInfo = this.getProperties('username', 'email');
      if(userInfo.username && userInfo.email){
        var self = this;
        this.store.find('user', userInfo.username)
        .then(function(registeredUser){
          if(userInfo.email === registeredUser.get('email')){
            self.transitionToRoute('auth.sentpassnotify');
          } else {
            self.set('error', true);
            self.set('errorMessage', 'Check your email and try again');
          }
        },
        function(){
          self.set('error', true);
          self.set('errorMessage', "The user doesn't exist");
        });
        
      }else{
        this.set('error', true);
        this.set('errorMessage', 'Fill out everything');
      }
    }
  }

});

export default AuthResetpasswordController;