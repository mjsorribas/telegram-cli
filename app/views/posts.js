var Posts = Ember.View.extend({
  classNames: ['eachPostContent'],
  mouseEnter: function(){
    this.set('entered', true);
  },
  mouseLeave: function(){
    this.set('entered', false);
  }
});

export default Posts;