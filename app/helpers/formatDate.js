// export default Ember.Handlebars.registerBoundHelper('formatDate',function(date) {
//   return moment(date).fromNow();
// });

var formatDate = Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).fromNow();
});
export default formatDate;