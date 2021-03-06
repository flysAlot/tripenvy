var React = require('react');

var NavBar = React.createClass({

  handleSave: function handleClick() {
    //TODO: please do this!!!!!!!
    console.log('saved');
  },

  handleFBShare: function handleFBShare() {
    //TODO: please do this!!!!!!!
    window.open("https://twitter.com/intent/tweet?text=Hello%20Everyone%20@%20Emirates%20Hackathon&via=TripEnvy&original_referer=http://tripenvy.mybluemix.net", "_blank");
    console.log('shared on fb')
  },

  handleVenmo: function handleVenmo() {
    //TODO: please do this!!!!!!!
    console.log('split via Venmo')
  },

  SocialShareBlock: function SocialShareBlock() {
    //TODO: please do this!!!!!!!

    //TODO: please fix the handle triggers!!!
    return this.props.travelPlan.length > 0 ?
      <div className="social-sharing" style={{'marginLeft':'20%'}}>
        <button className="btn btn-primary" onClick={this.handleFBShare} style={{'cursor':'pointer'}}>Share</button>
        <button className="btn btn-success" onClick={this.handleVenmo} style={{'cursor':'pointer'}}>Book Now</button>
      </div> : <div className="add-something">Start building your trip! <br />Choose a destination</div>;
  },

  render: function() {

    var planArray = [];
    var total = 0;
    // console.log('this is travelplan', this.props);

    if (this.props.travelPlan) {
      for (var i = 0; i < this.props.travelPlan.length; i++) {
        var name = this.props.travelPlan[i].name;
        var price = this.props.travelPlan[i].price;
        var imageUrl = '';
        if (this.props.travelPlan[i].category === "flight") {
          imageUrl = "http://www.iconarchive.com/download/i89017/icons8/ios7/Transport-Airplane-Take-Off.ico";
        } else if (this.props.travelPlan[i].category === "experience") {
          //TODO: add image for experiences
          // var random = Math.floor(Math.random()*5);
          var images = [ 'http://icons.iconarchive.com/icons/icons8/ios7/512/Travel-Creek-icon.png',
            'http://icons.iconarchive.com/icons/icons8/ios7/512/Travel-Campfire-icon.png',
            'http://icons.iconarchive.com/icons/icons8/ios7/512/Travel-Camping-Tent-icon.png',
            'http://icons.iconarchive.com/icons/icons8/ios7/512/Sports-Time-Trial-Biking-icon.png',
            'http://icons.iconarchive.com/icons/icons8/ios7/512/Travel-Coconut-Cocktail-icon.png' ]
          imageUrl = images[this.props.travelPlan[i].randomInt];


          //check this out: http://www.iconarchive.com/show/ios7-icons-by-icons8/Travel-Campfire-icon.html. maybe math.random
        }
        total += parseInt(price.slice(1));
        planArray.push(
          <div className="planItem" key={i}>
            <img className="planIcon" src={imageUrl}/>
            <div className="planItemName">
              {name}
            </div>
            <div className="planItemPrice">
              {price}
            </div>
          </div>
          )
      }
      //TODO: format the x's? currently positioned weirdly

    }
    console.log('this is total', total);

    //TODO: style this shit
    var totalText = total === 0 ? "" :
    <div className="experience-cost">
      <h3>Plan this trip for only      <span style={{'fontSize':'30px','fontWeight':'500','color':'green'}}>${total}<span style={{'fontSize':'30px','fontWeight':'500'}}>!</span></span></h3>
      <h3>Share with Friends or Lock In the Price Below!</h3>
    </div>;

    return (
      <div className='xs-col-3' style={{'float':'left','width':'20%',}}>
        <nav className="navbar">  
          <div className='logo' style={{'paddingLeft':'10%','height':'10%','backgroundColor':'#009ACD','marginTop':'-7%','marginBottom':'-6%'}}>
            <i style={{'float':'left','marginRight':'15px'}} className="fa fa-camera-retro fa-5x fa-inverse"></i><h1 className='logoFont' style={{'fontWeight':'bold','paddingTop':'10%','marginLeft':'8%'}}>TripEnvy</h1>
          </div>
          <hr/>
          <div className='navHeader'>
            <h3>Your {this.props.selectedCityName} Trip</h3>
          </div>
          <hr/>
          <div className="planList">
            {planArray}
          </div>
          <hr/>
          <div>
            {totalText}
          </div>
          <div>
            {this.SocialShareBlock()}
          </div>
        </nav>
      </div>
    );
  }

});

module.exports = NavBar;
