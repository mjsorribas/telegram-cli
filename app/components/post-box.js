export default Ember.Component.extend({
  actions: {
    removePostTrigger: function(){
      this.sendAction('sendToController', this.get('this'));
      console.log(this.get('this'));
    }
  }
});