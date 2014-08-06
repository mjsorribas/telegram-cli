var UserIndexController = Ember.ArrayController.extend({
	sortProperties: ['date'],
  sortAscending: false
  // posts: (function() {
  //   return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
  //     sortProperties: ['date'],
  //     sortAscending: false,
  //     content: this.get('model.posts')
  //   });
  // }).property('model.posts')
});

export default UserIndexController;