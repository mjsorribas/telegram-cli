// http://stackoverflow.com/questions/16753150/unable-to-query-emberjs-model-when-using-ds-fixtureadapter
var ApplicationAdapter = DS.FixtureAdapter.extend({
  // queryFixtures: function(records, query, type) {
  //   return records.filter(function(record) {
  //       for(var key in query) {
  //           if (!query.hasOwnProperty(key)) { continue; }
  //           var value = query[key];
  //           if (record[key] !== value) { return false; }
  //       }
  //       return true;
  //   });
  // }
});
export default ApplicationAdapter;