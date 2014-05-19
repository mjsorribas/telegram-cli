var ResetpasswordController = Ember.ArrayController.extend({
  actions: {
    sendpass: function(){
      // Some logic to send email here

      // Make the transition to reset success page
      this.transitionToRoute('sentpassnotify');
    }
  }

});

export default ResetpasswordController;