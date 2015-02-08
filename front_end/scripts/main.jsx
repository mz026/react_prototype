var Greeting = require('./greeting');
var name = 'Jack';
/* jshint devel:true */
console.log('\'Allo \'Allo!');
React.render(<Greeting name={name}/>, document.getElementById('content'))
