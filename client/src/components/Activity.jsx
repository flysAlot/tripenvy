var React = require('react');

var Activity = React.createClass({

  learnMore: function(){
    this.props.toggleMoreInfo(true, this.props.index);
  },

  render: function() {
    return (
      <div className="activity" style={{'float':'left', 'marginBottom':'2%'}}>
        <div className="activityImg">
          <img src={this.props.imageUrl} />
        </div>
        <div className="activityTitle" style={{'marginBottom':'1%'}}>
          {this.props.name}
        </div>
        <div className="activityButton">
          <button className="btn btn-default" onClick={this.learnMore}>Learn More</button>
        </div>
      </div>
    );
  }
});

module.exports = Activity;
