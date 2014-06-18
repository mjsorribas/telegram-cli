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