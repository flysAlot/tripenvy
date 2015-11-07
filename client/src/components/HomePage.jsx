var React = require('react');

var HomePage = React.createClass({

  initMap: function(){
    var map = new google.maps.Map(document.getElementsById('gMap'),{
      zoom:4
    });
  },

  render: function(){
    return (
      <div>
        {this.initMap()}
      </div>
    )
  },
})

module.exports = HomePage;