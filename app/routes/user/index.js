var UserIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("user", params.user_id);
  }
  // ,
  // renderTemplate: function(controller){
  //   this.render('user/index', {controller: controller});
  // }
});
export default UserIndexRoute;