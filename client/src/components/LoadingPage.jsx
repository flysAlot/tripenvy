var React = require('react');

var LoadingPage = React.createClass({

  render: function render() {
    if (this.props.isLoading && !this.props.middleLoad) {
      return (
        <div className = "loading"> 
          <img src="https://docs.sencha.com/cmd/6.x/images/loading.gif"/>
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
          <span>{this.props.number} destinations found that you will love!</span>
        </div>
      );
    }

  }
})

module.exports = LoadingPage;
