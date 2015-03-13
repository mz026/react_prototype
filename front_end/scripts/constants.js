function createConstants (arr) {
  var cons = {};

  arr.forEach(function(c) {
    cons[c] = c;
  });

  return cons;
}

module.exports = createConstants([
  'EXPERT_UPDATED'
]);
