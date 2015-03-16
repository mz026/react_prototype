var Fluxxor = require('fluxxor');
var constants = require('../constants');

var ExpertsStore = Fluxxor.createStore({
  initialize: function() {
    this.bindActions(constants.EXPERT_UPDATED, this._onExpertUpdated);

    this._experts = [];
  },

  _onExpertUpdated: function(payload) {
    this._experts = payload.data;
    this.emit('change');
  },
  getExperts: function() {
    return this._experts;
  },
  dehydrate: function(data) {
    this._experts = data;
  }
});

module.exports = ExpertsStore;
