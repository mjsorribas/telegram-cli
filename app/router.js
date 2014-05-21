var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('auth', {path: '/'}, function(){
    this.route('register', {path: '/'});
    this.route('login');
    this.route('resetpassword');
    this.route('sentpassnotify');
  });

  this.route('posts');
  this.resource('users', function(){
    // this.route('index',{path: '/'}) - UsersIndexRoute
    this.resource('user',{path:':user_id'}, function(){
      // this.route('index',{path: '/'}) - UserIndexRoute
      this.route('following');
      this.route('followers');
    });
  });
});

export default Router;
