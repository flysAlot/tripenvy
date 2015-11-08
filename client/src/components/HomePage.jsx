var React = require('react');
var GoogleMap = require('./mappy');
var NavBar = require('./NavBar');
var MapModal = require('./MapModal');

var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var HomePage = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar />
        <GoogleMap openModal={this.props.openModal} />
        <MapModal 
          showModal={this.props.showModal} 
          close={this.props.closeModal} 
          toggleActivities={this.props.toggleActivities}
          showActivities={this.props.showActivities}/>
      </div>
    );
  }

});

module.exports = HomePage;
