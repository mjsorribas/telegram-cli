var User = DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  posts: DS.hasMany('post'),
  id: User.username
});

User.reopenClass({
  FIXTURES: [{
    name: 'Will Smith',
    username: 'will',
    email: 'will@example.com',
    password: 'password',
    id: 'will'
  }
  // ,{
  //   id: 2,
  //   name: 'Beyonce Knowles',
  //   username: 'beyonce',
  //   email: 'beyonce@example.com',
  //   password: 'password'
  // },{
  //   id: 3,
  //   name: 'Joseph Gordon-Levitt',
  //   username: 'joseph',
  //   email: 'joseph@example.com',
  //   password: 'password'
  // },{
  //   id: 4,
  //   name: 'Gal Gagot',
  //   username: 'gal',
  //   email: 'gal@example.com',
  //   password: 'password'
  // }
  ]
});

export default User;