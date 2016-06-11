var SignUp = React.createClass({
  contextTypes: {
    history: React.PropTypes.object
  },

  getInitialState: function(){
    return { signedUp: false };
  },

  _navigate: function(path){
    this.context.history.pushState(null, path);
  },

  _onRegisterSuccess: function(data){
    var _this = this;

    this.setState({ signedUp: true });

    setTimeout(function(){
      _this._navigate('/');
      _this = null;
    }, 1500);
  },

  _onRegisterFailure: function(res){
    this.setState({ errorMessage: res.responseJSON.error.message });
  },

  _onClickSignUp: function(){
    var options = {
      done: this._onRegisterSuccess,
      fail: this._onRegisterFailure
    }

    Auth.signUp(
      this.refs.name.getValue(),
      this.refs.email.getValue(),
      this.refs.password.getValue(),
      this.refs.passwordConfirmation.getValue(),
      options
    )
  },

  _onClickBack: function(){
    this._navigate('/');
  },

  _errorMessage: function(){
    if (!this.state.errorMessage) return null;

    return (
      <div className="errorMessage pull-down-30">{this.state.errorMessage}</div>
    );
  },

  _content: function(){
    var content;

    if (this.state.signedUp)
      content = (
        <div className="signed-up">Sign-Up successful!</div>
      );
    else
      content = (
        <div className="center-inputs">
          <TextField ref="name" floatingLabelText="Name" />
          <TextField ref="email" floatingLabelText="Email" />
          <TextField ref="password" floatingLabelText="Password" type="password"/>
          <TextField ref="passwordConfirmation" floatingLabelText="Password Confirmation" type="password"/>
          <div className="buttons-wrapper pull-down-10">
            <FlatButton className="sign-up-btn" label={"Sign Up"} secondary={true} onClick={this._onClickSignUp} />
            <FlatButton className="back-btn" label={"Back"} onClick={this._onClickBack} />
          </div>
        </div>
      );

    return content;
  },

  render: function(){
    return (
      <div id="register_page">
        <div className="center-header">Register</div>
        {this._errorMessage()}
        {this._content()}
      </div>
    );
  }
});

module.exports = SignUp;
