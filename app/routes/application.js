var ApplicationRoute = Ember.Route.extend({
  beforeModel: function() {
    var route = this;
    return $.get("/api/users/", 
      function(response) {
        // console.log(response);
        var user = route.store.push('user', response.user);
        route.set('session.user', user);
      },
      function(error){
        console.log(error);
      });
  }
});
export default ApplicationRoute;