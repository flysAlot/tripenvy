var React = require('react');

//Import components
var LoginButton = require('./components/LoginButton');
// var serverUrl = 'http://127.0.0.1:3000'
var HomePage = require('./components/HomePage');

var App = React.createClass({

  getInitialState: function getInitialState() {
    return {
      userIsAuthenticated: false,
      currentPage: 'login',
      showHomePageModal: false,
      showActivities: false,
      isLoading: true,
      showMoreInfo: false,
      travelPlan: []
    }
  },

  //MODAL METHODS
  openModal: function openModal(index) {
    this.setState({
      showHomePageModal: true,
      selectedCityIndex: index
    })
  },

  closeModal: function closeModal() {
    this.setState({
      showHomePageModal: false
    })
  },

  //ACTIVITIES METHODS

  toggleActivities: function toggleActivities() {
    this.setState({
      showActivities: true
    })
  },

  toggleMoreInfo: function toggleMoreInfo(bool, index) {
    this.setState({
      showMoreInfo: bool,
      selectedExperienceIndex: index
    })
  },

  addToTravelPlan: function addToTravelPlan(item) {
    var tempPlan = this.state.travelPlan;
    tempPlan.push(item);
    this.setState({
      travelPlan: tempPlan
    })
  },

  clearTravelPlan: function clearTravelPlan() {
    this.setState({
      travelPlan: []
    })
  },

  //Checks if the user is authenticated (with an authentication url--not robust, but it'll do with implicit flow)
  componentWillMount: function componentWillMount() {
    var _this = this;
    var token = window.location.hash.slice(14);
    if (token.length > 30) {
      _this.setState({
        userIsAuthenticated: true,
        currentPage: 'homePage',
        token: token,
      }, function() {
        $.ajax({
          url: '/getData',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
            accessToken: _this.state.token
          }),
          // data: {accessToken: this.state.token},
          success: function success(data) {
            console.log('yay', data);
            _this.setState({
              allData: data,
              isLoading: false
            })
          }
        });
      });
    }
  },

  LoginButtonBlock: function LoginButtonBlock() {
    if (this.state.currentPage === 'login'){
      //TODO: make a nice login screen
      return <LoginButton />
    } else if (this.state.isLoading) {
      //TODO: make a loading screen
      return <div>loading...</div>
    } else {
      return <HomePage
        allData={this.state.allData}
        showModal={this.state.showHomePageModal}
        openModal={this.openModal}
        closeModal={this.closeModal}
        toggleActivities={this.toggleActivities}
        showActivities={this.state.showActivities}
        selectedCityIndex={this.state.selectedCityIndex}
        showMoreInfo={this.state.showMoreInfo}
        toggleMoreInfo={this.toggleMoreInfo}
        selectedExperienceIndex={this.state.selectedExperienceIndex}
        travelPlan={this.state.travelPlan}
        addToTravelPlan={this.addToTravelPlan}
        clearTravelPlan={this.clearTravelPlan}/>
    }
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
React.render(element, document.querySelector('.container-fluid'));
