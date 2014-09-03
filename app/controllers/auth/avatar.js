var AuthAvatarController = Ember.ObjectController.extend({

  // avatar: null,

  // actions: {
  //   uploadAvatar: function(){
  //     Ember.Logger.debug("account this.get('avatar')",this.get('avatar'));
  //     Ember.Logger.debug("account this.get('firstObject')", this.get('firstObject')); 

  //     this.set('error', null);
  //     this.set('successMsg', null);

  //     var userAvatar = this.get('avatar');

  //     if(!userAvatar){
  //       return this.set('error', 'Please select a photo to upload');
  //     }

  //     var updateUser = this.get('firstObject');
  //     updateUser.set('avatar', userAvatar);

  //     var _this = this;

  //     var onSuccess = function(){
  //       _this.set('avatar', '');

  //       Ember.Logger.debug('Successfully updated your avatar');
  //       var successMessage = 'Successfully updated your avatar';
  //       _this.set('successMsg', successMessage);
  //     };

  //     var onFail = function(err){
  //       Ember.Logger.error('Failed to update your avatar: ', err.responseText);
  //       var errorMsg = err.responseText || 'There was an error internally, please try again';

  //       _this.set('error', errorMsg);
  //     };

  //     updateUser.save().then(onSuccess, onFail);
  //   }
  // }

});

export default AuthAvatarController;