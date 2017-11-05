var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/kids';
var db = pgp(connectionString);

// add query functions

function getAllScores(req, res, next) {
  db.any('select * from scores')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL scores'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllScores: getAllScores
};