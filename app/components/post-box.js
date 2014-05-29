export default Ember.Component.extend({
  actions: {
    removePost: function(item) {
      if(this.get('session.user') && item.get('user') === this.get('session.user')){
        // console.log(item);
        // this.sendAction('action', item);
        item.deleteRecord();
        item.save();
      } else {
        console.log("You are not this post's author");
      }
    }
  }
});