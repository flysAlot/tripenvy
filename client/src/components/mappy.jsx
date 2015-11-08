var React = require('react');
var Modal = require('react-bootstrap').Modal;


var GoogleMap = React.createClass({
  
  openModal: function(selectedCityIndex) {
    this.props.openModal(selectedCityIndex);
  },

  clearTravelPlan: function(selectedCityIndex) {
    this.props.clearTravelPlan();
    var planObject = {
      name: "Ticket to " + this.props.cities[selectedCityIndex].airportCode,
      price: "$" + this.props.cities[selectedCityIndex].flightData.trips.tripOption[0].saleTotal.slice(3),
      category: "flight"
    };
    this.props.addToTravelPlan(planObject);
  },

  //TODO: please center map well! ask Max
  getDefaultProps: function () {
    return {
      initialZoom: 4,
      mapCenterLat: 37.773972,
      mapCenterLng: -122.431297
    };
  },

  componentDidMount: function () {
    var _this = this;
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
      name: 'Trip Envy'
    });

    var customMapTypeId = "custom_style";
    var mapOptions = {
        center: this.mapCenterLatLng(),
        zoom: this.props.initialZoom,
        mapTypeControlOptions: {
          mapTypeIds: [customMapTypeId]
        }
      };
    var map = new google.maps.Map(this.getDOMNode(), mapOptions);
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
    
    //stub markers    
    // var allPoints = [{latitude: 40.7,longitude:74.3},{latitude:37.8,longitude:122.4}];

    var allPoints = [];

    for (var i = 0; i < this.props.cities.length; i++) {
      allPoints.push({
        latitude: this.props.cities[i].lat,
        longitude: this.props.cities[i].lon,
        citiesIndex: i
      })
    };

    // console.log('this is allPoints', allPoints);

    for(var i = 0; i < allPoints.length; i++){
      var myLatlng = new google.maps.LatLng(allPoints[i].latitude, allPoints[i].longitude);
      var iconImage = '../airplaneIcon.png';
      var marker = new google.maps.Marker({
        position: myLatlng,
        map:map,
        animation: google.maps.Animation.DROP,
        icon: iconImage
      })
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        // console.log('i', i);
        return function() {
          // console.log('this is i', i);
          _this.clearTravelPlan(i);
          _this.openModal(i); //pass in the AirPort id here.
          // infowindow.setContent("<ul><li>Latitude " + allPoints[i].latitude + "</li><li>Longitude " + allPoints[i].longitude + "</li></ul>");
          // infowindow.open(map, marker);
        };
      })(marker, i)); 
    }
    // this.setState({map: map});
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
