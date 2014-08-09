var Post = DS.Model.extend({
  body: DS.attr('string'),
  user: DS.belongsTo('user'),
  date: DS.attr('date'),
  isDeleted: DS.attr('boolean', {defaultValue: false}),
  originalAuthor: DS.belongsTo('user')
});

export default Post;