var Post = DS.Model.extend({
  body: DS.attr('string'),
  user: DS.belongsTo('user'),
  date: DS.attr('date')
});

Post.reopenClass({
  FIXTURES:[{
    id: 1,
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini',
    user: 'will',
    date: 'Tue, 06 May 2014 21:03:32 GMT'
  },{
    id: 2,
    body: 'Salut! This is 2nd oldest post, from Joseph!',
    user: 'joseph',
    date: 'Sat, 10 May 2014 21:33:30 GMT'
  },{
    id: 3,
    body: 'Hey everyone, I am Gal Gagot!',
    user: 'gal',
    date: 'Tue, 20 May 2014 22:33:32 GMT'
  },{
    id: 4,
    body: 'What up! This is latest post!',
    user: 'beyonce',
    date: 'Thu, 29 May 2014 23:33:30 GMT'
  }]
});

export default Post;