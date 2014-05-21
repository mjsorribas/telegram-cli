var Post = DS.Model.extend({
  body: DS.attr('string'),
  user: DS.belongsTo('user')
});

Post.reopenClass({
  FIXTURES:[{
    id: 1,
    body: 'Hello world! This is the fist post!',
    user: 'will'
  },{
    id: 2,
    body: 'Hey hoo! Second post!',
    user: 'gal'
  },{
    id: 3,
    body: 'What up! Third post is here!',
    user: 'beyonce'
  }]
});

export default Post;