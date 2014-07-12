function isValidEmail(email){
  var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return regex.test(email);
}
function isValidPassword(password){
  return password.length >= 6;
}

var AuthRegisterController = Ember.ObjectController.extend({
  name:     null,
  username: null,
  email:    null,
  password: null,
  error:    null,

  actions: {
    register: function(){
      this.set('error', null);
      var userInfo = this.getProperties('name', 'username', 'email', 'password');

      if(!isValidEmail(userInfo.email)){
        return this.set('error', 'Please enter a valid email');
      }
      if(!userInfo.name){
        return this.set('error', 'Please enter your name');
      }
      if(!userInfo.username){
        return this.set('error', 'Please enter your username');
      }
      if(!isValidPassword(userInfo.password)){
        return this.set('error', 'Password must be at least 6 characters');
      }
        
      var newUser = this.store.createRecord('user', {
        username: userInfo.username,
        name:     userInfo.name,
        email:    userInfo.email,
        password: userInfo.password
      });

      var self = this;
      var onSuccess = function(){
        self.set('session.user', newUser);
        self.setProperties({
          'name':     '',
          'username': '',
          'email':    '',
          'password': ''
        });
        self.transitionToRoute('posts');
      };
      var onFail = function(){
        self.set('error', 'There was an error internally, please try again');
      };
      newUser.save().then(onSuccess, onFail);
    }
  }

});

export default AuthRegisterController;