var Greeting = require('./components/greeting');
var name = 'Jack';
var Fluxxor = require('fluxxor');

var flux = new Fluxxor.Flux({}, {});


var App = require('./components/application');
React.render(<App flux={flux}/>, document.getElementById('content'))
