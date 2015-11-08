var React = require('react');
var GoogleMap = require('./mappy');
var NavBar = require('./NavBar');
var MapModal = require('./MapModal');

var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var HomePage = React.createClass({

  getInitialState: function(){
    return { 
      showModal: false,
    };
  },
  
  close: function() {
    this.setState({ showModal: false });
  },
  open: function() {
    this.setState({ showModal: true });
  },

  render: function() {
    return (
      <div>
        <NavBar />
        <GoogleMap openModal={this.open} />
        <MapModal showModal={this.state.showModal} close={this.close} />
      </div>
    );
  }

});

module.exports = HomePage;