var User = DS.Model.extend({
  username: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  posts: DS.hasMany('post'),
  avatar: DS.attr('string'),
  followedByCurrentUser: DS.attr('boolean', {defaultValue: false})
});

export default User;