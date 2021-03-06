var Expert = require('../api_utils/expert');
var constants = require('../constants');

module.exports = {
  updateExperts: function() {
    var self = this;
    return Expert.query()
             .then(function(res) {
               self.dispatch(constants.EXPERT_UPDATED, { data: res });
               console.log('updated!');
               return res;
             });
  }
}
