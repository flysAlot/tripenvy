var React = require('react');
var Activity = require('./Activity');

var HomePage = React.createClass({

  MoreInfoBlock: function MoreInfoBlock() {
    return this.props.showMoreInfo ? 
      <div>
        <div className="activityDetailTitle">
        </div>
        <div className="activityTitle">
          {this.props.cityExperiences[this.props.selectedExperienceIndex].desc}
        </div>
      </div> : <div></div>;
  },



  render: function() {
    console.log('these are experiences', this.props.cityExperiences);
    var experienceArray = [];
    var EXPERIENCES_LIMIT = 5;
    for (var i = 0; i < Math.min(this.props.cityExperiences.length, EXPERIENCES_LIMIT); i++) {
      if (this.props.cityExperiences[i].medias) {
        var imageUrl = this.props.cityExperiences[i].medias[0].src;
        var name = this.props.cityExperiences[i].name;
        var price = this.props.cityExperiences[i].price;
        experienceArray.push(
          <Activity 
            imageUrl={imageUrl}
            name={name}
            price={price}
            toggleMoreInfo={this.props.toggleMoreInfo}
            index={i}
            addToTravelPlan={this.props.addToTravelPlan}
            clearTravelPlan={this.props.clearTravelPlan}
            key={i}/>
          )
      }

    }
    // var resultArray = shuffle(experienceArray).slice(0,5);
    return (
      <div id="activities-area">
        <div id="activity-list" style={{'width':'50%'}}>
          {experienceArray}
        </div>
        {this.MoreInfoBlock() }
      </div>
    );
  }

});

var shuffle = function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

module.exports = HomePage;
