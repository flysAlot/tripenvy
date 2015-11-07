var React = require('react');

//Import components
var LoginButton = require('./components/LoginButton');

var App = React.createClass({

  getInitialState: function getInitialState() {
    return {
      userIsAuthenticated: false,
    }
  },

  //Checks if the user is authenticated (with an authentication url--not robust, but it'll do with implicit flow)
  componentWillMount: function componentWillMount() {
    var _this = this;
    var token = window.location.hash.slice(14);
    if (token.length > 30) {
      _this.setState({
        userIsAuthenticated: true,
        token: token,
      })
    }
  },

  LoginButtonBlock: function LoginButtonBlock() {
    return this.state.userIsAuthenticated ? <div>You are now logged in</div> : <LoginButton />;
  },

  render: function render() {
    return (
      <div>
        { this.LoginButtonBlock() }
      </div>
      )
  }
});

var element = React.createElement(App);
React.render(element, document.querySelector('.container'));
