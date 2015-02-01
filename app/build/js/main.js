(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Greeting = require('./greeting');
/* jshint devel:true */
console.log('\'Allo \'Allo!');
React.render(React.createElement(Greeting, null), document.getElementById('content'))

},{"./greeting":2}],2:[function(require,module,exports){
var Greeting = React.createClass({displayName: "Greeting",
  render: function() {
    return React.createElement("h2", null, "Greeting");
  }
});

module.exports = Greeting;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL216MDI2L2NvZGVzL3RveXMvcmVhY3RfcHJvdG90eXBlMi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9tejAyNi9jb2Rlcy90b3lzL3JlYWN0X3Byb3RvdHlwZTIvLnRtcC9zY3JpcHRzL2Zha2VfZmY3ZDhkNzUuanMiLCIvaG9tZS9tejAyNi9jb2Rlcy90b3lzL3JlYWN0X3Byb3RvdHlwZTIvLnRtcC9zY3JpcHRzL2dyZWV0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBHcmVldGluZyA9IHJlcXVpcmUoJy4vZ3JlZXRpbmcnKTtcbi8qIGpzaGludCBkZXZlbDp0cnVlICovXG5jb25zb2xlLmxvZygnXFwnQWxsbyBcXCdBbGxvIScpO1xuUmVhY3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JlZXRpbmcsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKVxuIiwidmFyIEdyZWV0aW5nID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkdyZWV0aW5nXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIkdyZWV0aW5nXCIpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBHcmVldGluZztcbiJdfQ==
