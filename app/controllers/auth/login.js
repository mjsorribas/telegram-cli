function cryptPassword(password){
  return $.md5(password);
}

var AuthLoginController = Ember.ObjectController.extend({
  username: null,
  password: null,
  error: null,

  actions: {
    login: function(){

      this.set('error', null);

      var userInfo = this.getProperties('username', 'password');

      if(!userInfo.username){
        return this.set('error', 'Please enter your username');
      }
      if(!userInfo.password){
        return this.set('error', 'Please enter your password');
      }

      var _this = this;

      var onSuccess = function(response){
        var authUser = response.get('firstObject');

        Ember.Logger.debug('Successfully logged in as: ', authUser);

        _this.set('session.user', authUser);
        
        _this.setProperties({
          'username': '',
          'password': ''
        });

        _this.transitionToRoute('posts');  
      };

      var onFail = function(err){
        Ember.Logger.error('Failed to login: ', err.responseText);
        var errorMsg = err.responseText || 'There was an error internally, please try again';

        _this.set('error', errorMsg);
      };

      this.store.find('user', {
        username: userInfo.username, 
        password: cryptPassword(userInfo.password), 
        operation: 'login'})
      .then(onSuccess, onFail);
    }
  }
});

export default AuthLoginController;