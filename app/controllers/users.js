var UsersController = Ember.ArrayController.extend({
  actions: {
  	logout: function(){
	    var self = this;

	    $.get('/api/logout')
	      .done(function(){
	        console.log('LOGOUT-Ember-done');
	        self.transitionToRoute('auth.login');
	      })
	      .fail(function(){
	        console.log('LOGOUT-Ember-fail');
	      })
	      .always(function(){
	        console.log('LOGOUT-Ember-always');
	      });
  	}
  }
});

export default UsersController;