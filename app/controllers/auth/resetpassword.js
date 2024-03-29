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

      var _this = this;

      var onSuccess = function(registeredUser){
        Ember.Logger.debug('Sent a new password to user: ', registeredUser);

        if(userInfo.email === registeredUser.get('firstObject.email')){
          _this.setProperties({
            'username': '',
            'email': ''
          });
          _this.transitionToRoute('auth.sentpassnotify');

        } else {
          Ember.Logger.error('Error on finding email to send a new password');
          _this.set('error', 'Check your email and try again');
        }
      };

      var onFail = function(err){
        Ember.Logger.error('Failed to send new password: ', err.responseText);
        var errorMsg = err.responseText || 'There was an error internally, please try again';

        _this.set('error', errorMsg);
      };

      this.store.find('user', {
        username:  userInfo.username, 
        email:     userInfo.email,
        operation: 'resetPassword'
      }).then(onSuccess, onFail);

    }
  }

});

export default AuthResetpasswordController;