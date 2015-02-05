var express = require('express');
var router = express.Router();
var React = require('react');

var path = require('path');

var frontEndPath = path.join(__dirname, '../front_end', 'scripts').toString();

/* GET home page. */
router.get('/', function(req, res, next) {
  var Greeting = require(frontEndPath + '/greeting');
  console.log(Greeting);
  res.render('index', { title: 'Express' });
});

module.exports = router;
