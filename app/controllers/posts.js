var PostsController = Ember.ArrayController.extend({
  body: null,
  postBody: '',

  posts: function(){
    var posts = [],
        ownPosts = this.get('newPosts.[]');

    this.forEach(function(post) {
      if(post.get('isDeleted')){
        if(posts.indexOf(post) >= 0){
          Ember.Logger.debug('Post to be removed: ', post);
          posts.splice(posts.indexOf(post), 1);
        }
      } else {
        if(posts.indexOf(post) < 0){
          Ember.Logger.debug('Post to be added: ', post);
          posts.push(post);
        }
      }
    });

    ownPosts.forEach(function(post){
      if(posts.indexOf(post) < 0){
        Ember.Logger.debug('Post to be added: ', post);
        posts.push(post);
      }
    });

    return Ember.ArrayController.create({
      content: posts, 
      sortProperties: ['date'], 
      sortAscending: false
    });

  }.property('@each', '@each.isDeleted', 'newPosts.[]'),
  
  charCount: function(){
    var charCount = this.get('postBody').length || 0,
        count     = 140 - charCount;

    return count;

  }.property('postBody'),

  actions: {
    publishPost: function(){
      var _this = this,
          body = this.get('postBody');

      if(body){
        Ember.Logger.debug('post body: ', body);

        var post = this.store.createRecord('post',{
          body: body,
          user: this.get('session.user'),
          date: new Date()
        });

        post.save().then(function(){
          _this.set('postBody', '');
          Ember.Logger.debug('Published and saved the post: ', post);
          return post;
        });
      } 
    }
  }
});

export default PostsController;