var request = require('request');
var auth = require('./auth.js');

var googleFlightsAPIKey = auth.googleFlightsAPIKey;

// get JSON response from Google FLights API
console.log('api key', googleFlightsAPIKey);
var getResults = function getResults(origin, destination, date) {
  var result;
  var callingBody = {
    "request": {
      "slice": [{
        "origin": "SFO",
        "destination": "DXB",
        // TODO: change date to be some time in the future. currently no ideas.
        "date": "2015-11-10"
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

  var FlightRequest = {
        "request": {
          "slice": [
            {
              "origin": "DCA",
              "destination": "LAX",
              "date": "2015-11-11"
            }
          ],
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
  var options = {
    uri: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDjiBoO8LXLflipnTcgBFXGYTi0oWk7sYw",
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(callingBody)
  }
  request(options, function(err, response, body) {
    console.log('this is body', body);
  })
  // request({
  //   method: "POST",
  //   contentType: "application/json",
  //   uri: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDjiBoO8LXLflipnTcgBFXGYTi0oWk7sYw",
  //   // uri: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=" + googleFlightsAPIKey,
  //   dataType: "jsonp",
  //   data: JSON.stringify(FlightRequest)
  //   // muteHttpExceptions : true
  // }, function(error, response, body) {
  //   console.log('37body', body);
  //   console.log ('bigdicks', response.headers);
  //   // console.log('38response', response);
  //   if (error) {
  //     console.log("There was an error with getResults:", error);
  //   }
  //   if (!error && response.statusCode == 200) {
  //     return result = response;
  //   }

  // });
  // console.log('the results', result)
  // return result;
};

// console.log('results thing', getResults("SFO", "DXB"));
