var express = require('express');

var server = express();
server.get('/experts', function(req, res) {
  var experts = [];
  for (var i = 0; i < 20; i += 1) {
    var index = i + 1;
    experts.push({
      id: index,
      name: 'mentor-' + index,
      age: index + 20
    });
  };
  res.set({
    'Access-Control-Allow-Origin': '*'
  });
  res.json(experts);
});


server.get('/lessons', function(req, res) {
  var lessons = [];
  for (var i = 0; i < 20; i += 1) {
    var index = i + 1;
    lessons.push({
      id: index,
      name: 'lesson-' + index,
      mentor_id: index
    });
  };
  res.json(lessons);
});

server.options('*', function(req, res) {
  res.set({
    'Access-Control-Allow-Origin': '*'
  });
  res.send('ok');
})

console.log('server listen to port: 3001');
server.listen(3001);

