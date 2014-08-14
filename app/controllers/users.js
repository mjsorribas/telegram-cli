var UsersController = Ember.ArrayController.extend({
  actions: {
  	logout: function(){
	    var self = this;

	    $.get('/api/logout')
	      .done(function(){
	        Ember.Logger.debug('LOGOUT-Ember-done');
	        self.transitionToRoute('auth.login');
	      })
	      .fail(function(){
	        Ember.Logger.error('LOGOUT-Ember-fail');
	      })
	      .always(function(){
	        Ember.Logger.debug('LOGOUT-Ember-always');
	      });
  	}
  }
});

export default UsersController;