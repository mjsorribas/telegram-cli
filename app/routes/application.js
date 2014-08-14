var ApplicationRoute = Ember.Route.extend({
  beforeModel: function() {
    var route = this;
    return $.ajax({
      url: '/api/checkLoggedIn/',
      type: 'GET',
      dataType: 'json',
      data: {},
      success: function(response) {
        Ember.Logger.debug('beforeModel checkLoggedIn response: ', response);
        if(response.user){
          Ember.Logger.debug('response.user: ', response.user);
          var user = route.store.push('user', response.user);
          route.set('session.user', user);
        } 
      },
      error: function(err) {
        Ember.Logger.error('Error on beforeModel checkLoggedIn: ', err);
      }
    });
  }
});
export default ApplicationRoute;