var React = require('react');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Experts = React.createClass({
  mixins: [ FluxMixin, StoreWatchMixin('Experts') ],

  getStateFromFlux: function() {
    return {
      experts: this.getFlux().store('Experts').getExperts()
    };
  },

  componentDidMount: function() {
    this.getFlux().actions.Expert.updateExperts();
  },
  render: function() {
    var experts = this.state.experts.map(function(exp) {
      return <li> { exp.name } </li>;
    });
    return (
      <div>
        <h2>Experts</h2>
        
        <ul>
          { experts }
        </ul>
      </div>
    );
  }
})

module.exports = Experts;
