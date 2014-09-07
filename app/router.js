var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {

  this.resource('auth', {path: '/'}, function(){
    this.route('register', {path: '/'});
    this.route('login');
    this.route('resetpassword');
    this.route('sentpassnotify');
    this.route('account');
  });

  this.route('posts');
  this.route('search');

  this.resource('users', function(){
    this.resource('user',{path:'/:user_id'}, function(){
      this.route('following');
      this.route('followers');
    });
  });

  this.route('bad', {path: '/*bad'});
  
});

export default Router;
