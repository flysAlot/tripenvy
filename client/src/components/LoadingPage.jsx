var React = require('react');

var LoadingPage = React.createClass({

  render: function render() {
    if (this.props.isLoading && !this.props.middleLoad) {
      return (
        <div className = "loading"> 
          <img src="http://media.giphy.com/media/Xwylqg5agyn2U/giphy.gif"/>
          <span>Searching for places that you would LOVE to visit!</span>
        </div>
        )
    } else {
      var _this = this;
      setTimeout(function() {
        _this.props.completeLoading();
      }, 700)
      return (
        <div className="loading">  
          <img src="http://media.giphy.com/media/Xwylqg5agyn2U/giphy.gif"/>
          <span><b>{this.props.number}</b> destinations found that you will love!</span>
        </div>
      );
    }

  }
})

module.exports = LoadingPage;
