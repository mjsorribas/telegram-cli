var Post = DS.Model.extend({
  body: DS.attr('string'),
  user: DS.belongsTo('user'),
  date: DS.attr('date'),
  isDeleted: DS.attr('boolean', {defaultValue: false})
});

export default Post;