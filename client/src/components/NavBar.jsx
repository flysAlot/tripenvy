var React = require('react');

var NavBar = React.createClass({

  render: function() {
    return (
      <div className='xs-col-3' style={{'float':'left','width':'20%'}}>
        <nav className="navbar">
          <h3>San Francisco Trip</h3>
          <div className="planList">
            <div className="planItem">
              <img className="planIcon" src="http://www.iconarchive.com/download/i89017/icons8/ios7/Transport-Airplane-Take-Off.ico" />
              <div className="planItemName">
                San Francisco
              </div>
              <div className="planItemPrice">
                $300
              </div>
              <div className="planItemRemove">
                <i className="fa fa-times"></i>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }

});

module.exports = NavBar;