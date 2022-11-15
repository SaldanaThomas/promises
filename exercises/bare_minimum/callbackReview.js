/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');
//'/../files/file_to_read.txt'
// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      var firstLine = data.split(/\r?\n/);
      callback(err, firstLine[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, (err, res, body) => {
    err ? callback(err) : callback(err, 200);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
