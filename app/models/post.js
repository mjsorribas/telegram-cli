var Post = DS.Model.extend({
  body: DS.attr('string'),
  user: DS.belongsTo('user'),
  date: DS.attr('date')
});

Post.reopenClass({
  FIXTURES:[{
    id: 1,
    body: 'Hello world! This is the oldest post!',
    user: 'will',
    date: 'Tue, 26 May 2014 21:33:32 GMT'
  },{
    id: 2,
    body: 'Hey hoo! Second oldest post!',
    user: 'gal',
    date: 'Tue, 27 May 2014 20:33:32 GMT'
  },{
    id: 3,
    body: 'What up! Tis is latest post!',
    user: 'beyonce',
    date: 'Tue, 27 May 2014 21:33:30 GMT'
  }]
});

export default Post;