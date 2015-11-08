var React = require('react');
var GoogleMap = require('./mappy');
var NavBar = require('./NavBar');
var MapModal = require('./MapModal');

var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var HomePage = React.createClass({

  // triggerModal: function openModal() {
  //   this.props.openModal();
  // },

  render: function() {
    var cities = [];
    for (var key in this.props.allData) {
      cities.push(this.props.allData[key]);
    }
    console.log('this is cities', cities);
    var selectedCityName = this.props.selectedCityIndex === 0 || this.props.selectedCityIndex? cities[this.props.selectedCityIndex].city : "";
    // console.log('this is props index', this.props.selectedCityIndex);
    console.log('this is props', this.props);
    return (
      <div>
        <NavBar 
          selectedCityName={selectedCityName}
          travelPlan={this.props.travelPlan}/>
        <GoogleMap 
          openModal={this.props.openModal} 
          cities={cities}
          addToTravelPlan={this.props.addToTravelPlan}
          clearTravelPlan={this.props.clearTravelPlan}/>
        <MapModal 
          showModal={this.props.showModal} 
          close={this.props.closeModal} 
          toggleActivities={this.props.toggleActivities}
          showActivities={this.props.showActivities}
          cities={cities}
          selectedCityIndex={this.props.selectedCityIndex}
          showMoreInfo={this.props.showMoreInfo}
          toggleMoreInfo={this.props.toggleMoreInfo}
          selectedExperienceIndex={this.props.selectedExperienceIndex}
          addToTravelPlan={this.props.addToTravelPlan}
          clearTravelPlan={this.props.clearTravelPlan}/>
      </div>
    );
  }

});

module.exports = HomePage;
