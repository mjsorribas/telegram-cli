var ApplicationRoute = Ember.Route.extend({
  beforeModel: function() {

    var route = this;
    
    if(this.get('session.user')){
      console.log('Yes');
      console.log(this.get('session.user'));
    } else {
      console.log('No');
      $.get("/api/users",
      function(response) {
        console.log(response);
        var user = route.store.push('user', response.user);
        route.set('session.user', user);
      });
    }

    
    // var route = this;
    // return $.get("/api/users",
    //   function(response) {
    //     console.log(response);
    //     var user = route.store.push('user', response.user);
    //     route.set('session.user', user);
    //   });
  }
});
export default ApplicationRoute;