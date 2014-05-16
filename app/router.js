var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('register', {path: '/'});
  this.route('login');
  this.route('reset_password');
  this.route('reset_success');

  this.route('posts', {path: '/'})
  this.resource('username', function(){
    this.route('following');
    this.route('followers');
  });
});

export default Router;
