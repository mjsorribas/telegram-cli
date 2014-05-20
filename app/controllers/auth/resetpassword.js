var AuthResetpasswordController = Ember.ObjectController.extend({
  content: {},
  actions: {
    sendpass: function(){

      // Some logic to send email here


      // Make the transition to reset success page
      this.transitionToRoute('auth.sentpassnotify');
    }
  }

});

export default AuthResetpasswordController;