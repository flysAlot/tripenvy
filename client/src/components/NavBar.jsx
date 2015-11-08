var React = require('react');

var NavBar = React.createClass({

  render: function() {
    return (
      <div className='xs-col-3' style={{'float':'left','width':'20%'}}>
      <nav>
        <h3>Trip Estimate</h3>
        <ul>
          <li>Golden Gate Visit</li>
        </ul>
      </nav>
      </div>
    );
  }

});

module.exports = NavBar;