var ApplicationRoute = Ember.Route.extend({
  beforeModel: function() {
    var route = this;

    console.log('===== NEW AJAX CALL ======');
    return $.ajax({
          url: '/api/checkLoggedIn/',
          type: 'GET',
          dataType: 'json',
          data: {},
          success: function(response) {
            console.log('response.user: ' + response.user);
            if(response.user){
              var user = route.store.push('user', response.user);
              route.set('session.user', user);
            } 
          },
          error: function() {
            console.log('Error');
          }
        });
  }
});
export default ApplicationRoute;