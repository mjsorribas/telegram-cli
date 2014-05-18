var UsersUserIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("user", params.user_id);
  },
  renderTemplate: function(controller){
    this.render('users/user/index', {controller: controller});
  }
});
export default UsersUserIndexRoute;