export default Ember.Component.extend({
  click: function() {
    this.sendAction('removePost', this.get('item'));
  }
});