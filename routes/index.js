var express = require('express');
var router = express.Router();
var React = require('react');

var path = require('path');

var frontEndPath = path.join(__dirname, '../front_end', 'scripts').toString();

var fs = require('fs');
var ejs = require('ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var Greeting = require(frontEndPath + '/greeting');

  template = fs.readFileSync(__dirname + '/../front_end/index.html', 'utf8');
  console.log(template);

  var content = React.renderToString(Greeting({ name: 'Jude' }));
  res.send(ejs.render(template, { content: content }));
});

module.exports = router;
