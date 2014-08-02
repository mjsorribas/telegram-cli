var PostsRoute = Ember.Route.extend({
  beforeModel: function(){
    if(!this.get('session.user')) {
      this.transitionTo('auth.login');
    }
  },
  model: function(){
    return this.store.find('post', {followeesOf: this.get('session.user.id')});
  }
});
export default PostsRoute;