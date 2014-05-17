var UsersIndexRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('post').findBy('username', params.username);
  }
});
export default UsersIndexRoute;