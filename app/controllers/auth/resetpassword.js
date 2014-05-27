var AuthResetpasswordController = Ember.ObjectController.extend({
  username: null,
  email: null,
  error: null,

  actions: {
    sendpass: function(){
      this.set('error', null);
      var userInfo = this.getProperties('username', 'email');

      if(!userInfo.username){
        this.set('error', 'Please enter your username');
      }
      if(!userInfo.email){
        this.set('error', 'Please enter your email');
      }

      var self = this;
      var onSuccess = function(registeredUser){
        if(userInfo.email === registeredUser.get('email')){
          self.setProperties({
            'username': '',
            'email': ''
          });
          self.transitionToRoute('auth.sentpassnotify');
        } else {
          self.set('error', 'Check your email and try again');
        }
      };
      var onFail = function(){
        self.set('error', "The user doesn't exist");
      };
      this.store.find('user', userInfo.username).then(onSuccess, onFail);
    }
  }

});

export default AuthResetpasswordController;