var SearchRoute = Ember.Route.extend({
  beforeModel: function(){
    if(!this.get('session.user')) {
      this.transitionTo('auth.login');
    }
  },

  model: function(){    
    return this.store.find("user", {selfusername: this.get('session.user.id')});
  },

  actions: {
    searchUser: function() {

      var _this = this;
      var searchTerm = this.controller.get('userQuery');

      Ember.Logger.debug('Searching user...', searchTerm);

      if(!searchTerm){
        return this.set('error', 'Please enter username to search users');
      }

      this.store.find("user", {searchTerm: searchTerm}).then(function(response){
        _this.controller.set('posts', null);
        _this.controller.set('error', null);
        _this.controller.set('postQuery', null);
        Ember.Logger.debug(response);
        _this.controller.set('users', response);
      });

      // var request = $.ajax({
      //   url: '/api/users/',
      //   type: 'GET',
      //   dataType: 'json',
      //   data: {searchTerm: searchTerm}
      // });

      // request.done(function(response) {
      //   _this.set('error', null);
      //   _this.set('posts', null);
      //   Ember.Logger.debug('Done: Users...', response.users);
      //   _this.set('users', response.users);
      //   _this.set('userQuery', null);
      // });
       
      // request.fail(function( error ) {
      //   _this.set('users', null);
      //   _this.set('posts', null);
      //   _this.set('userQuery', null);
      //   Ember.Logger.debug('Failed...', error.responseText);
      //   _this.set('error', error.responseText);
      // });
    },

    searchPost: function() {

      var _this = this;
      var searchTerm = this.controller.get('postQuery');

      Ember.Logger.debug('Searching user...', searchTerm);

      if(!searchTerm){
        return this.set('error', 'Please enter keywords to search posts');
      }

      this.store.find("post", {searchTerm: searchTerm}).then(function(response){
        _this.controller.set('users', null);
        _this.controller.set('error', null);
        _this.controller.set('postQuery', null);
        Ember.Logger.debug(response);
        _this.controller.set('posts', response);
      });

      //   var request = $.ajax({
      //     url: '/api/posts/',
      //     type: 'GET',
      //     dataType: 'json',
      //     data: {searchTerm: searchTerm}
      //   });

      //   request.done(function(response) {
      //     _this.set('error', null);
      //     _this.set('users', null);
      //     Ember.Logger.debug('Done: Posts...', response.posts);
      //     _this.set('posts', response.posts);
      //     _this.set('postQuery', null);
      //   });
         
      //   request.fail(function( error ) {
      //     _this.set('users', null);
      //     _this.set('posts', null);
      //     _this.set('postQuery', null);
      //     Ember.Logger.debug('Failed...', error.responseText);
      //     _this.set('error', error.responseText);
      //   });
    }
  }
});
export default SearchRoute;