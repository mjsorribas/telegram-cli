var Post = DS.Model.extend({
  body: DS.attr('string'),
  user: DS.belongsTo('user'),
  date: DS.attr('date')
});

export default Post;