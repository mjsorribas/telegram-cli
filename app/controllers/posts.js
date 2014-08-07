var PostsController = Ember.ArrayController.extend({
  // sortProperties: ['date'],
  // sortAscending: false,
  body: null,
  postBody: '',
  posts: function(){
    var posts = [],
        ownPosts = this.get('newPosts.[]');

    this.forEach(function(post) {
      if(post.get('isDeleted')){
        console.log(post.get('user'));
        if(posts.indexOf(post) >= 0){
          posts.splice(posts.indexOf(post), 1);
        }
      } else {
        if(posts.indexOf(post) < 0){
          posts.push(post);
        }
      }
    });

    ownPosts.forEach(function(post){
      if(posts.indexOf(post) < 0){
        posts.push(post);
      }
    });

    return Ember.ArrayController.create({
      content: posts, 
      sortProperties: ['date'], 
      sortAscending: false
    });
  }.property('@each', '@each.isDeleted', 'newPosts.[]'),
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
          return post;
        });
      } 
    }
  },
  charCount: function(){
    var charCount = this.get('postBody').length || 0;
    var count = 140 - charCount;
    return count;
  }.property('postBody'),
  logout: function(){
    var self = this;

    $.get('/api/logout')
      .done(function(){
        console.log('LOGOUT-Ember-done');
        self.transitionToRoute('auth.login');
      })
      .fail(function(){
        console.log('LOGOUT-Ember-fail');
      })
      .always(function(){
        console.log('LOGOUT-Ember-always');
      });
  }
});

export default PostsController;