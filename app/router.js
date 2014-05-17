var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('register', {path: '/'});
  this.route('login');
  this.route('resetpassword');
  this.route('resetsuccess');

  this.route('posts');
  this.resource('/:username', function(){
    this.route('following');
    this.route('followers');
  });
});

export default Router;
