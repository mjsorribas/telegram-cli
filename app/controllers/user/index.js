var UserIndexController = Ember.ObjectController.extend({
  // WIP: This is not working
  sortProperties: ['posts.date'],
  sortAscending: false
});

export default UserIndexController;