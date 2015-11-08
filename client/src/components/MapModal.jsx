var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var ActivitiesList = require('./ActivitiesList');

var fakeActivitiesData = {

};

var MapModal = React.createClass({

  toggleActivities: function toggleActivities() {
    this.props.toggleActivities();
  },

  ActivitiesBlock: function ActivitiesBlock() {
    return this.props.showActivities === false ? <h1 >Click Images to View Activities in the Area</h1> : <h1><ActivitiesList /></h1>;
  },

  render: function render() {
    return (
      <div>  
        <Modal show={this.props.showModal} onHide={this.props.close} backdrop={false} bsSize={'large'}>
          <Modal.Header closeButton>
            <Modal.Title>Photos of yo Friendz</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="instagram-images">
              <div onClick={this.toggleActivities} className="img-box">
                <img className="instagram-img" src="http://www.staysf.com/upload/attraction/20080519172721_golden%20gate%20park.jpg" />
              </div>
              <div className="img-box">
                <img className="instagram-img" src="http://www.staysf.com/upload/attraction/20080519172721_golden%20gate%20park.jpg" />
              </div>
              <div className="img-box">
                <img className="instagram-img" src="http://www.staysf.com/upload/attraction/20080519172721_golden%20gate%20park.jpg" />
              </div>
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
