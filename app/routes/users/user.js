var UsersUserRoute = Ember.Route.extend({
  // model: function(params) {
  //   return this.store.find("user", params.user_id);
  // },
  // renderTemplate: function(controller){
  //   this.render('users/user', {controller: controller});
  // }

  redirect: function(){
    this.transitionTo('posts');
  }
});
export default UsersUserRoute;