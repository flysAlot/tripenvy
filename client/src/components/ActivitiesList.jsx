var React = require('react');
var Activity = require('./Activity');

var HomePage = React.createClass({

  getInitialState: function() {
    return {
      showActivity: false
    }
  },

  ActivityBlock: function() {
    return this.state.showActivity ? <Activity /> : <div></div>;
  },

  learnMore: function(){
    this.setState({
      showActivity: true
    });
  },

  render: function() {
    return (
      <div id="activities-area">
        <div id="activity-list">
          <div className="activity">
            <div className="activityImg">
              <img src="http://dev.xola.com/experiences/4fe0fcba536e86cc4400001a/medias/4fe24dbb536e86364900002c?width=260&height=200" />
            </div>
            <div className="activityTitle">
              Sea Cave Kayaking in Mendocino
            </div>
            <div className="activityButton">
              <button className="btn btn-default" onClick={this.learnMore}>Learn More</button>
            </div>
          </div>
        </div>
        {this.ActivityBlock() }
      </div>
    );
  }

});

module.exports = HomePage;