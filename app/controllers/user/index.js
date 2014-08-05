var UserIndexController = Ember.ArrayController.extend({
  posts: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['date'],
      sortAscending: true,
      content: this.get('model.posts')
    });
  }).property('model.posts')
});

export default UserIndexController;