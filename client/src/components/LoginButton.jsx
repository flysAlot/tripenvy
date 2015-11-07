var React = require('react');
var instagramAuth = require('../../../instagramAuth');

var LoginButton = React.createClass({

  //Action that is triggered once user hits login. 
  submitLogin: function submitLogin() {
    var instagramLoginUrl = 'https://api.instagram.com/oauth/authorize/?' + 
      'client_id=' + instagramAuth.clientID +
      '&redirect_uri=' + instagramAuth.redirectURL +
      '&response_type=token';
    window.location.assign(instagramLoginUrl);
  },

  render: function render() {
    return (
      <div>
        <span onClick={ this.submitLogin } style={{cursor:'pointer'}}>Log into Instagram</span>
      </div>
      );
  },
})

module.exports = LoginButton;
