var request = require('request');

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
  allImages = [];

  getLikedContent(accessToken, function(likedImagesArray) {
    for (var i = 0; i < likedImagesArray.length; i++) {
      allImages.push(likedImagesArray[i]);
    }
    if (allComplete(apiGating)) {
      cb(allImages)
    }
  });
  getFriendImages(accessToken, function(friendImagesArray) {
    for (var i = 0; i < friendImagesArray.length; i++) {
      if (!friendImagesArray[i].user_has_liked) {
        allImages.push(friendImagesArray[i]);
      }
      
    }
    if (allComplete(apiGating)) {
      cb(allImages)
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


module.exports = {
  getData
}
