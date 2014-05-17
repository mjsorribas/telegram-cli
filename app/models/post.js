var belongsTo = DS.belongsTo;

var Post = DS.Model.extend({
  body: DS.attr('string')
,user: DS.belongsTo('user')
});

Post.reopenClass({
  FIXTURES:[{
    id: 1,
    body: 'Hello world! This is the fist post!'
    ,user: '1'
  },{
    id: 2,
    body: 'Hey hoo! Second post!'
    ,user: '2'
  },{
    id: 3,
    body: 'What up! Third post is here!'
    ,user: '3'
  }]
});

export default Post;