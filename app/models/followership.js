var Followership = DS.Model.extend({
  follower: DS.attr('string'),
  followee: DS.attr('string')
});

export default Followership;