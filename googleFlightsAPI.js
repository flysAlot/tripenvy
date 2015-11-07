var request = require('request');
var auth = require('./auth.js');

var googleFlightsAPIKey = auth.googleFlightsAPIKey;

// get JSON response from Google FLights API
var getResults = function getResults(origin, destination, date) {
  var result;
  var body = {
    "request": {
      "slice": [{
        "origin": origin,
        "destination": destination,
        // TODO: change date to be some time in the future. currently no ideas.
        "date": "2015-11-25"
      }],
      "passengers": {
        "adultCount": 1,
        "infantInLapCount": 0,
        "infantInSeatCount": 0,
        "childCount": 0,
        "seniorCount": 0
      },
      "solutions": 20,
      "refundable": false
    }
  };

  // send POST request to Google Flights API
  request({
    method: 'POST',
    uri: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=' + googleFlightsAPIKey,
    multipart: [{
      'content-type': 'application/json',
      body: JSON.stringify(body);
    }]
  }, function(error, response, body) {
    if (error) {
      console.log("There was an error with getResults:", error);
    }
    if (!error && response.statusCode == 200) {
      return result = response;
    }

  });
  return result;
};
