var React = require('react');

var LoadingPage = React.createClass({

  render: function render() {
    if (this.props.isLoading && !this.props.middleLoad) {
      return (
        <div style={{'width':'800px', 'margin':'0 auto'}}> 
          <img src="https://docs.sencha.com/cmd/6.x/images/loading.gif"/>
          <div>We are searching for places that you would LOVE to visit!</div>

        </div>
        )
    } else {
      var _this = this;
      setTimeout(function() {
        _this.props.completeLoading();
      }, 700)
      return (
        <div style={{'width':'800px', 'margin':'0 auto'}}>  
          Wow! We found {this.props.number} destinations that you would love!
        </div>
      );
    }

  }
})

module.exports = LoadingPage;
