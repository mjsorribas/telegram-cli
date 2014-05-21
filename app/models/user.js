var User = DS.Model.extend({
  // id is username on registering a user
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  posts: DS.hasMany('post'),
});

User.reopenClass({
  FIXTURES: [{
    id: 'will',
    name: 'Will Smith',
    email: 'will@example.com',
    password: 'password'
  },{
    id: 'beyonce',
    name: 'Beyonce Knowles',
    email: 'beyonce@example.com',
    password: 'password'
  },{
    id: 'joseph',
    name: 'Joseph Gordon-Levitt',
    email: 'joseph@example.com',
    password: 'password'
  },{
    id: 'gal',
    name: 'Gal Gagot',
    email: 'gal@example.com',
    password: 'password'
  }]
});

export default User;