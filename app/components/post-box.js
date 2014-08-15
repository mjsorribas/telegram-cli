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

  isDeleted: false,
  
  actions: {
    removePost: function(post){
      post.set('isDeleted', true);
      post.deleteRecord();
      post.save();
    },

    showModal: function(){
      this.set('confirmRepost', true);
    },

    yesRepost: function(){
      Ember.Logger.debug('The post of repost (param): ', this.get('param'));
      this.sendAction('action', this.get('param'));
    },

    noRepost: function(){
      this.set('confirmRepost', false);
    }
  }
});