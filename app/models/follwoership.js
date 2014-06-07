var Followership = DS.Model.extend({
  follower: DS.belongsTo('user'),
  followee: DS.belongsTo('user')
});

Followership.reopenClass({
  FIXTURES: [{
  	id: 1,
    follower: 'will',
    followee: 'gal'
  },{
  	id: 2,
  	follower: 'gal',
    followee: 'will'
  }]
});

export default Followership;