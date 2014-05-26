var Posts = Ember.View.extend({
  classNames: ['eachPostContent'],
  mouseEnter: function(event){
    this.set('entered', true);
    this.get('controller').send('isAuthor', this.get('post').user);
  },
  mouseLeave: function(){
    this.set('entered', false);
  }
});

export default Posts;