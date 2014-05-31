var PostsController = Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,
  body: null,
  postBody: '',
  actions:{
    publishPost: function(){
      var self = this;
      var body = this.get('postBody');
      if(body){
        var post = this.store.createRecord('post',{
          body: body,
          user: this.get('session.user'),
          date: new Date()
        });
        post.save().then(function(){
          self.set('postBody', '');
        });
      } 
    }
    // ,
    // removePost: function(item) {
    //   if(this.get('session.user') && item.get('user') === this.get('session.user')){
    //     item.get('model').deleteRecord();
    //     item.get('model').save();
    //   } else {
    //     console.log("You are not this post's author");
    //   }
    // }
  },
  charCount: function(){
    var charCount = this.get('postBody').length || 0;
    var count = 140 - charCount;
    return count;
  }.property('postBody')
});

export default PostsController;