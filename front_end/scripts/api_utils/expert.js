var request = require('superagent');
var Q = require('q');

module.exports = {
  query: function() {
    var deferred = Q.defer();

    request
      .get('http://localhost:3001/experts')
      .end(function(err, res) {
        if ( err ) {
          deferred.reject(err);
        } else {
          deferred.resolve(res.body);
        }
      });

    return deferred.promise;
  }
}

