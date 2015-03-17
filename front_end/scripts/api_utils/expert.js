var request = require('superagent');
var Q = require('q');

module.exports = {
  query: function() {
    var deferred = Q.defer();

    request
      .get('http://54.178.161.37:3001/experts')
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

