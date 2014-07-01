var ApplicationRoute = Ember.Route.extend({
  beforeModel: function() {
    var route = this;
    return $.get("/api/checkLoggedIn/",
      function(response) {
        console.log(response.user);
        if(response.user){
          var user = route.store.push('user', response.user);
          route.set('session.user', user);
        }
      });
  }
});
export default ApplicationRoute;