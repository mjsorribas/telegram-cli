var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  posts: DS.hasMany('post'),
  avatar: DS.attr('string'),
  followedByCurrentUser: DS.attr('boolean', {defaultValue: false})
});

User.reopenClass({
  FIXTURES: [{
    id: 'will',
    name: 'Will Smith',
    email: 'will@example.com',
    password: 'password',
    avatar: 'images/will.jpg'
  },{
    id: 'beyonce',
    name: 'Beyonce Knowles',
    email: 'beyonce@example.com',
    password: 'password',
    avatar: 'images/beyonce.jpeg'
  },{
    id: 'joseph',
    name: 'Joseph Gordon-Levitt',
    email: 'joseph@example.com',
    password: 'password',
    avatar: 'images/joseph.jpeg'
  },{
    id: 'gal',
    name: 'Gal Gagot',
    email: 'gal@example.com',
    password: 'password',
    avatar: 'images/gal.jpg'
  }]
});

export default User;