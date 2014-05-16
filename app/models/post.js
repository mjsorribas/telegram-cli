// var belongsTo = DS.belongsTo;

var Post = DS.Model.extend({
  body: DS.attr('string'),
  // user: DS.belongsTo('user'),
});

Post.reopenClass({
  FIXTURES:[{
    id: 1,
    body: 'Hello world! This is the fist post!'
    // ,username: 'alice'
  },{
    id: 2,
    body: 'Hey hoo! Second post!'
    // ,username: 'bob'
  },{
    id: 3,
    body: 'What up! Third post is here!'
    // ,username: 'chris'
  }]
});

export default Post;