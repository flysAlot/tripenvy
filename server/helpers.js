var request = require('request');
var airportData = require('./airportData');
var auth = require('../auth.js');
var googleFlightsAPI = require('./../googleFlightsAPI.js');

var DEFAULT_ORIGIN = "SFO";
var DEFAULT_DATE = "2016-1-27";

var allComplete = function allComplete(gate) {
  for (var key in gate) {
    if (gate[key] === false) {
      return false;
    }
  }
  return true;
}

var apiGating = {
  likedContent: false,
  friendContent: false
}

var getData = function getData(body, cb) {
  var accessToken = body.accessToken;
  var allImages = [];

  getLikedContent(accessToken, function(likedImagesArray) {
    for (var i = 0; i < likedImagesArray.length; i++) {
      allImages.push(likedImagesArray[i]);
    }
    if (allComplete(apiGating)) {
      var destinationsWithImages = findNearestAirport(allImages);
      for (var airport in destinationsWithImages) {
        var destination = destinationsWithImages[airport];
        googleFlightsAPI.getResults(DEFAULT_ORIGIN, destination.airportCode, DEFAULT_DATE, function(response) {
          var res = JSON.parse(response);
          destinationsWithImages[airport].flightData = res;
          // console.log(destinationsWithImages);
          counter++;
          if (counter === Object.keys(destinationsWithImages).length) {
            cb(destinationsWithImages);
          } else {
            console.log('nope', counter);
          }
        });

      }
      // cb(findNearestAirport(allImages));
      // cb(allImages)
    }
  });
  getFriendImages(accessToken, function(friendImagesArray) {
    for (var i = 0; i < friendImagesArray.length; i++) {
      if (!friendImagesArray[i].user_has_liked) {
        allImages.push(friendImagesArray[i]);
      }

    }
    if (allComplete(apiGating)) {
      var destinationsWithImages = findNearestAirport(allImages);
      var counter = 0;
      for (var airport in destinationsWithImages) {
        var destination = destinationsWithImages[airport];
        googleFlightsAPI.getResults(DEFAULT_ORIGIN, destination.airportCode, DEFAULT_DATE, function(response) {
          var res = JSON.parse(response);
          destinationsWithImages[airport].flightData = res;
          // console.log(destinationsWithImages);
          counter++;
          if (counter === Object.keys(destinationsWithImages).length) {
            cb(destinationsWithImages);
          } else {
            console.log('nope', counter);
          }
        });

      }
      // cb(findNearestAirport(allImages))
      // cb(allImages)
    }
  })
};

var getLikedContent = function getLikes(accessToken, cb) {
  var getLikedQueryString = 'https://api.instagram.com/v1/users/self/media/liked?access_token=' + accessToken;
  var likedImagesArray = [];

  //Variables to ensure user doesn't use too many requests for one search. Realistically, requestLimit would be higher (~100)
  var requestCounter = 0;
  var requestLimit = 2;

  var recursiveQuery = function recursiveQuery(queryString) {
    requestCounter++;
    console.log('this is requestCounter', requestCounter, 'with queryString', queryString);
    if (requestCounter >=requestLimit) {
      console.log('triggered base case');
      apiGating.likedContent = true;
      cb(likedImagesArray);
      return;
    }
    request.get(queryString, function(err, res, body) {
      var parsedBody = JSON.parse(body);
      var dataArray = parsedBody.data;
      for (var i = 0; i < dataArray.length; i++) {
        if (dataArray[i].location) {
          likedImagesArray.push(dataArray[i]);
        }
      };
      if (parsedBody.pagination.next_url) {
        recursiveQuery(parsedBody.pagination.next_url);
      } else {
        console.log('triggered at end');
        apiGating.likedContent = true;
        cb(likedImagesArray);
      }
    })
  }
  recursiveQuery(getLikedQueryString);
};

var getFriendImages = function getFriendImages(accessToken, cb) {
  var getFriendsQueryString = 'https://api.instagram.com/v1/users/self/feed?access_token=' + accessToken;

  var friendImagesArray = [];

  //Variables to ensure user doesn't use too many requests for one search. Realistically, requestLimit would be higher (~100)
  var requestCounter = 0;
  var requestLimit = 3;

  //TODO: DRY this
  var recursiveQuery = function recursiveQuery(queryString) {
    requestCounter++;
    console.log('this is requestCounter', requestCounter, 'with queryString', queryString);
    if (requestCounter >=requestLimit) {
      console.log('triggered base case');
      apiGating.friendContent = true;
      cb(friendImagesArray);
      return;
    }
    request.get(queryString, function(err, res, body) {
      var parsedBody = JSON.parse(body);
      var dataArray = parsedBody.data;
      for (var i = 0; i < dataArray.length; i++) {
        if (dataArray[i].location) {
          friendImagesArray.push(dataArray[i]);
        }
      };
      if (parsedBody.pagination.next_url) {
        recursiveQuery(parsedBody.pagination.next_url);
      } else {
        console.log('triggered at end');
        apiGating.friendContent = true;
        cb(friendImagesArray);
      }
    })
  }
  recursiveQuery(getFriendsQueryString);
}

var findNearestAirport = function findNearestAirport(imageArray, cb) {
  var result = {};
  console.log('inside findnearest airport');
  var counter = 0;
  for (var i = 0; i < imageArray.length; i++) {
    var lat = imageArray[i].location.latitude;
    var lon = imageArray[i].location.longitude;
    // console.log(lat, lon);
    for (var j = 0; j < airportData.length; j++) {
      var distance = calcDistance(lat, lon, airportData[j]['lat'], airportData[j]['lon']);
      // console.log(distance);
      if (distance < 32000) {
        counter++
        // console.log('found match for airport', airportData[j]['airport'], i);
        var code = airportData[j]['code'];
        result[code] =  result[code] ? result[code] : {
          images: [],
          airportCode: code,
          lat: airportData[j]['lat'],
          lon: airportData[j]['lon'],
          airportName: airportData[j]['airport']
        };
        result[code].images.push(imageArray[i]);
        break;
      }
    }

  }
  console.log(counter);
  return result;
}

var calcDistance = function calcDistance(lat1, lon1, lat2, lon2){
  /* implemented from https://en.wikipedia.org/wiki/Great-circle_distance */
  var c = Math.PI/180;
  lat1 = lat1*c;
  lat2 = lat2*c;
  lon1 = lon1*c;
  lon2 = lon2*c;
  return 6371000 * 2 * Math.asin(Math.sqrt(
      Math.sin((lat2-lat1) / 2) * Math.sin((lat2-lat1) / 2) + Math.cos(lat1)*Math.cos(lat2)*
      Math.sin((lon2-lon1) / 2) * Math.sin((lon2-lon1) / 2)
    ));
}

// [NOTUSED] get results using the Emirates API
// var getResult = function getResult(originAirport, destinationAirport, date, flightClass) {

<<<<<<< HEAD
// get results using the Emirates API
var getResult = function getResult(originAirport, destinationAirport, date, flightClass, cb) {
  if (!cb) {cb = function(param){console.log(param)}}

  var result;

  var url = 'https://ec2-54-77-6-21.eu-west-1.compute.amazonaws.com:8143/flightavailability/1.0/?FlightDate=' + date + '&Origin=' + originAirport + '&Destination=' + destinationAirport + '&Class=' + flightClass;

  var options = {
    url: url,
    rejectUnauthorized: false,
    headers: {
      Method: "GET",
      Accept: "application/json",
      Authorization: "Bearer 912dc4f9974c2ad4235fb874837f2e"
    }
  };

  var callback = function callback(error, response, body) {
    if (error) {
      console.log('There was an error: ', error);
    }
    // console.log('Emirates API body', body);
    cb(body);
  };

  request(options, callback);
};
=======
//   var url = 'https://ec2-54-77-6-21.eu-west-1.compute.amazonaws.com:8143/flightavailability/1.0/?FlightDate=' + date + '&Origin=' + originAirport + '&Destination=' + destinationAirport + '&Class=' + flightClass;

//   var options = {
//     url: url,
//     rejectUnauthorized: false,
//     headers: {
//       Method: "GET",
//       Accept: "application/json",
//       Authorization: "Bearer 912dc4f9974c2ad4235fb874837f2e"
//     }
//   };

//   var callback = function callback(error, response, body) {
//     if (error) {
//       console.log('There was an error: ', error);
//     }
//     // return body;
//     console.log('body', body);
//   };

//   request(options, callback);
// };
>>>>>>> [feat] (server): add google flight data

// TO TEST
// console.log(getResult("SFO", "DXB", "2015-12-12", "economy"));

module.exports = {
<<<<<<< HEAD
  getData,
  getResult
=======
  getData
>>>>>>> [feat] (server): add google flight data
}

var getXolaExperiences = function getXolaExperiences(cb, geo, maxPrice, sort) {
  if (!cb) {cb = function(param){console.log(param)}}
  if (!maxPrice) {maxPrice = ""}
  if (!sort) {sort = "price[asc]"} //or price[desc]
  if (!geo) {geo = "37.779497, -122.419233"} //SF City Hall

  var url = 'https://dev.xola.com/api/experiences?geo='
            + geo
            + '&price=' + maxPrice
            + '&sort=' + sort;

  var options = {
    url: url,
    headers: {
      Method: "GET",
      Accept: "application/json",
      "X-API-KEY": auth.xolaAPIKey
    },
  };

  var callback = function callback(error, response, body) {
    if (error) {
      console.log('There was an error: ', error);
    }
    // console.log('Xola body', body);
    cb(body);
  };

  request(options, callback);
};

// TO TEST
// getXolaExperiences("40.748817,-73.985428");
// getXolaExperiences();
