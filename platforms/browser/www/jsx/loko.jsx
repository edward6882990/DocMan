var TextField = require('material-ui/lib/text-field');

var Loko = React.createClass({
  render: function(){
    return (
      <div id="landing_page">
        <div className="landing-title">Loko</div>
        <div className="credentials">
          <TextField floatingLabelText="Email" />
          <TextField floatingLabelText="Password" type="password" />
        </div>
      </div>
    )
  }
});

module.exports = Loko;
