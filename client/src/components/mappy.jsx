var React = require('react');

var GoogleMap = React.createClass({
  getDefaultProps: function () {
    return {
      initialZoom: 4,
      mapCenterLat: 40.7,
      mapCenterLng: 74.3
    };
  },
  componentDidMount: function (rootNode) {
    var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {visibility: 'simplified'},
          {gamma: 0.5},
          {weight: 0.5}
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#F7F5F2"
            },
            {
                "weight": 1
            }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#4169E1"
            }
        ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#DDD4CB"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#DDD4CB"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      }
    ], {
      name: 'Custom Style'
    });
    var customMapTypeId = "custom_style";
    var mapOptions = {
        center: this.mapCenterLatLng(),
        zoom: this.props.initialZoom,
        mapTypeControlOptions: {
          mapTypeIds: [customMapTypeId]
        }
      },
      map = new google.maps.Map(this.getDOMNode(), mapOptions);
      map.mapTypes.set(customMapTypeId, customMapType);
      map.setMapTypeId(customMapTypeId);
    // var marker = new google.maps.Marker({position: this.mapCenterLatLng(), map: map});
    var allPoints = [{latitude: 40.7,longitude:74.3},{latitude:37.8,longitude:122.4}];
    for(var i = 0; i < allPoints.length; i++){
      var myLatlng = new google.maps.LatLng(allPoints[i].latitude, allPoints[i].longitude);
      var iconImage = '../airplaneIcon.png';
      new google.maps.Marker({
        position: myLatlng,
        map:map,
        animation: google.maps.Animation.DROP,
        icon: iconImage
      })
    }
    this.setState({map: map});
  },
  mapCenterLatLng: function () {
    var props = this.props;
    return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
  },
  render: function () {
    return (
      <div className='map-gic'></div>
    ); 
  }
});

module.exports = GoogleMap;

function dropPins(allPoints, map){
  // var infowindow = new google.maps.InfoWindow(); 
  for (var i = 0; i < allPoints.length; i++){
    var myLatlng = new google.maps.LatLng(allPoints[i].latitude, allPoints[i].longitude);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP
    });
    // google.maps.event.addListener(marker, 'click', (function(marker, i) {
    // return function() {
    //   infowindow.setContent("<ul><li>Latitude " + allPoints[i].latitude + "</li><li>Longitude " + allPoints[i].longitude + "</li></ul>");
    //   infowindow.open(map, marker);
    // };
  // })(marker, i));  
  }
}