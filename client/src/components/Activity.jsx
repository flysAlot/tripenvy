var React = require('react');

var Activity = React.createClass({

  render: function() {
    return (
      <div>
        <div className="activityDetailTitle">
          Tomales Point Tour - Ride the Currents!
        </div>
        <div className="activityDetailSummary">
          This is a paddler's paradise from Nick's Cove to the mouth of Tomales Bay!
        </div>
        <div>add the summary here</div>
      </div>
    );
  }
});

module.exports = Activity;