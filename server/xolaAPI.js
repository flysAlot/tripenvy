var request = require('request');

var getXolaExperiences = function getXolaExperiences(geo, maxPrice, sort, key, airportCode, cb) {
  if (!cb) {cb = function(param){console.log(param)}}
  if (!maxPrice) {maxPrice = ""}
  if (!sort) {sort = "price[desc]"} //or price[desc]
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
      "X-API-KEY": key
    },
  };

  var callback = function callback(error, response, body) {
    if (error) {
      console.log('There was an error: ', error);
    }
    // console.log('Xola body', body);
    cb(body, airportCode);
  };

  request(options, callback);
};



// TO TEST
// getXolaExperiences("40.748817,-73.985428");
// getXolaExperiences();

module.exports = {
  getXolaExperiences
}
