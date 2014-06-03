export default Ember.Component.extend({
  isMouseOver: false,

  mouseEnter: function(){
    this.set('isMouseOver', true);
  },

  mouseLeave: function(){
    this.set('isMouseOver', false);
  },

  isAuthor: function(){
    return this.get('user') === this.get('post.user');
  }.property('user', 'post.user'),

  showDeleteButton: function(){
    return this.get('isAuthor') && this.get('isMouseOver');
  }.property('isAuthor', 'isMouseOver'),

  actions: {
    removePost: function(post){
      post.deleteRecord();
      post.save();
    }
  }
});