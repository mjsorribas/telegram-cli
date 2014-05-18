var UsersUserIndexRoute = Ember.Route.extend({
  model: function(params) {
    // the server returns `{ slug: 'foo-user' }`
    return this.store.find("user", params.username);
  },

  serialize: function(model) {
    // this will make the URL `/users/foo-user`
    return { username: model.get('username') };
  }
});
export default UsersUserIndexRoute;