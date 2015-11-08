var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var ActivitiesList = require('./ActivitiesList');


var MapModal = React.createClass({

  toggleActivities: function toggleActivities() {
    this.props.toggleActivities();
  },

  ActivitiesBlock: function ActivitiesBlock() {

    return this.props.showActivities === false ? <div style={{'marginTop':'7%','marginLeft':'15%'}}><h1>Click Images to View Activities in the Area</h1></div> : 
      <h1><ActivitiesList 
        cityExperiences={this.props.cities[this.props.selectedCityIndex].experiences.data}
        showMoreInfo={this.props.showMoreInfo}
        toggleMoreInfo={this.props.toggleMoreInfo}
        selectedExperienceIndex={this.props.selectedExperienceIndex}
        addToTravelPlan={this.props.addToTravelPlan}
        clearTravelPlan={this.props.clearTravelPlan}/></h1>;
  },


  render: function render() {
    var city = this.props.cities[this.props.selectedCityIndex];
    var imageArray = [];
    if (city) {
      for (var i = 0; i < Math.min(3, city.images.length); i++) {
        var imageUrl = city.images[i].images.low_resolution.url;
        var caption = city.images[i].caption.text.slice(0,40);
        // console.log('this is imageUrl', imageUrl);
        imageArray.push(
          <div onClick={this.toggleActivities} className="img-box" key={i}>
            <img className="instagram-img" src={imageUrl} />
          <h3 style={{'top': '250px', 'textAlign':'center', 'width': '100%'}}> 
            <span style={{'color': 'white', 'font': '13px/24px Monaco, Sans-Serif', 'letterSpacing': '-1px', 'background': 'rgb(0, 0, 0)', 'background': 'rgba(0, 0, 0, 0.7)', 'padding': '10px'}}>{caption}</span>
          </h3>
          </div>
          )
      }
    }
    var name = this.props.cities[this.props.selectedCityIndex];

    //TODO: see if I can put {name} within the Modal.Title
    return (
      <div>  
        <Modal show={this.props.showModal} onHide={this.props.close} backdrop={false} bsSize={'large'}>
          <Modal.Header closeButton>
            <Modal.Title style={{'marginLeft':'30%'}}>Check out what your friends have done here!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="instagram-images">
              {imageArray}
            </div>
            <hr className="modal-break"/>
            { this.ActivitiesBlock() }
          </Modal.Body>
        </Modal>
      </div>
    );
  }
})

module.exports = MapModal;
