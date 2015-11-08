var React = require('react');
var Activity = require('./Activity');
var ListGroup = require('react-bootstrap').ListGroup;

var HomePage = React.createClass({
  AddThis: function (){
    var planObject = {
      name: this.props.cityExperiences[this.props.selectedExperienceIndex].name,
      price: "$" + this.props.cityExperiences[this.props.selectedExperienceIndex].price,
      category: "experience",
      randomInt: Math.floor(Math.random()*5),
    };
    this.props.addToTravelPlan(planObject);
  },

  MoreInfoBlock: function MoreInfoBlock() {
    return this.props.showMoreInfo ? 
      <div>
        <div className="activityImage" style={{'float':'left','width':'30%', 'marginLeft':'2%'}}>
          <img className='xolaImage' src={this.props.cityExperiences[this.props.selectedExperienceIndex].medias[0].src}/>
          <div style={{'marginTop':'8%','marginLeft':'2%'}} className="activityPrice">
          <span style={{'float':'left','fontWeight':'500','marginRight':'3%'}}>${this.props.cityExperiences[this.props.selectedExperienceIndex].price}</span>
          <div>
            <button className='btn btn-success' style={{'float':'left'}} onClick={this.AddThis}>Add to Itinerary</button>
          </div>
          </div>
        </div>
        <div className="activityDesc" style={{'float':'left','width':'65%', 'marginLeft':'2%'}}>
          <span style={{'fontSize':'14px','fontWeight':'300'}}>{this.props.cityExperiences[this.props.selectedExperienceIndex].desc}</span>
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
        <div id="activity-list" style={{'width':'30%', 'float':'left'}}>
          <ListGroup>
          {experienceArray}
          </ListGroup>
        </div>
        <div id='activity-info' style={{'width':'70%', 'float':'left'}}>
          {this.MoreInfoBlock() }
        </div>
      </div>
    );
  }

});

var shuffle = function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
          // {experienceArray}

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
