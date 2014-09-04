function isValidEmail(email){
  var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return regex.test(email);
}

function isValidPassword(password){
  Ember.Logger.debug('account password',password);
  if(password === null){
    return false;
  } else {
    return password.length >= 6;
  }
}

function cryptPassword(password){
  return $.md5(password);
}

var AuthAccountController = Ember.ArrayController.extend({

  accountuser: function(){
    var user = this.get('firstObject');
    return user;
  }.property('user'),

  name:     null,
  username: null,
  email:    null,
  password: null,
  error:    null,
  successMsg: null,

  actions: {
    saveuser: function(){
      Ember.Logger.debug('account this',this);
      Ember.Logger.debug("account this.get('firstObject')", this.get('firstObject')); 

      this.set('error', null);
      this.set('successMsg', null);

      var userInfo = this.get('firstObject').getProperties('name', 'username', 'email', 'avatar');
      var userPassword = this.get('password');

      if(!isValidEmail(userInfo.email)){
        return this.set('error', 'Please enter a valid email');
      }
      if(!userInfo.name){
        return this.set('error', 'Please enter your name');
      }
      if(!userInfo.username){
        return this.set('error', 'Please enter your username');
      }
      if(!isValidPassword(userPassword)){
        return this.set('error', 'Password must be at least 6 characters');
      }

      var updateUser = this.get('firstObject');
      updateUser.set('email', userInfo.email);
      updateUser.set('name', userInfo.name);
      updateUser.set('username', userInfo.username);
      updateUser.set('password', cryptPassword(userPassword));

      var _this = this;

      var onSuccess = function(){
        _this.set('session.user', updateUser);
        _this.setProperties({
          'name':     '',
          'username': '',
          'email':    '',
          'password': ''
        });

        Ember.Logger.debug('Successfully updated your acount information');
        var successMessage = 'Successfully updated your acount information';
        _this.set('successMsg', successMessage);
      };

      var onFail = function(err){
        Ember.Logger.error('Failed to update: ', err.responseText);
        var errorMsg = err.responseText || 'There was an error internally, please try again';

        _this.set('error', errorMsg);
      };

      updateUser.save().then(onSuccess, onFail);
    },

    deleteAccount: function(user){
      Ember.Logger.debug('Deleting Account User', user);
      user.deleteRecord();

      var _this = this;

      var onSuccess = function(){
        Ember.Logger.debug('Successfully deleted a user');

        _this.set('session.user', null);
        _this.transitionToRoute('/');
      };

      var onFail = function(err){
        if(err.responseText === 'OK'){
          Ember.Logger.error('Successfully delete a user!');

          _this.set('session.user', null);
          _this.transitionToRoute('/');

        } else {
          Ember.Logger.error('Failed to delete: ', err.responseText);
          var errorMsg = err.responseText || 'There was an error internally, please try again';

          _this.set('error', errorMsg);
        }
      };

      user.save().then(onSuccess, onFail);
    }
  }

});

export default AuthAccountController;