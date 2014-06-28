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

      var self = this;
      var onSuccess = function(response){
        var authenticatedUser = response.get('firstObject');
        self.set('session.user', authenticatedUser);
        self.setProperties({
          'username': '',
          'password': ''
        });
        self.transitionToRoute('posts');

        // var authenticatedUser = response.get('firstObject');
        // if(userInfo.password === authenticatedUser.get('password')){
        //   self.set('session.user', authenticatedUser);
        //   self.setProperties({
        //     'username': '',
        //     'password': ''
        //   });
        //   self.transitionToRoute('posts');
        // } else {
        //   self.set('error', 'Please check your password and try again');
        // }  
      };
      var onFail = function(){
        self.set('error', "The user doesn't exist");
      };
      this.store.find('user', {
        username: userInfo.username, 
        password: userInfo.password, 
        operation: 'login'})
      .then(onSuccess, onFail);
    }
  }
});

export default AuthLoginController;