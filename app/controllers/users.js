var UsersController = Ember.ArrayController.extend({
  actions: {
  	logout: function(){
  		this.transitionToRoute('auth.login');
  	}
  }
});

export default UsersController;