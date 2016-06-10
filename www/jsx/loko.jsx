var Loko = React.createClass({
  getInitialState: function(){
    return { errorMessage: null };
  },

  _errorMessage: function(){
    if (!this.state.errorMessage) return null;

    return (
      <div className="errorMessage pull-down-10">{this.state.errorMessage}</div>
    );
  },

  _onClickSignIn: function(){
    Auth.signIn(this.refs.email.getValue(), this.refs.password.getValue(),
    {
      fail: this._onSignInFailed
    });
  },

  _onSignInFailed: function(res){
    this.setState({ errorMessage: res.responseJSON.error.message });
  },

  render: function(){
    return (
      <div id="landing_page">
        <div className="landing-title">Loko</div>
        {this._errorMessage()}
        <div className="credentials">
          <TextField ref="email" floatingLabelText="Email" />
          <TextField ref="password" floatingLabelText="Password" type="password" />
          <div className="pull-down-10">
            <FlatButton className="sign-in-btn" label={"Sign In"} secondary={true} onClick={this._onClickSignIn} />
            <FlatButton className="register-btn" label={"Register"} primary={true} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Loko;
