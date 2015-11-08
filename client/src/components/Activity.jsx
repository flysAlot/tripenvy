var React = require('react');
var ListGroupItem = require('react-bootstrap').ListGroupItem;

var Activity = React.createClass({

  learnMore: function(){
    this.props.toggleMoreInfo(true, this.props.index);
  },
  render: function() {
    return (
        <ListGroupItem bsStyle='info' onClick={this.learnMore}>{this.props.name}</ListGroupItem>
    );
  }
});

module.exports = Activity;
