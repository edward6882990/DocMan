var Login = React.createClass({
  contextTypes: {
    history: React.PropTypes.object
  },

  getInitialState: function(){
    return { errorMessage: null };
  },

  _navigate: function(path){
    this.context.history.pushState(null, path);
  },

  _errorMessage: function(){
    if (!this.state.errorMessage) return null;

    return (
      <div className="errorMessage pull-down-10">{this.state.errorMessage}</div>
    );
  },

  _onClickSignIn: function(){
    var options = { done: this._onSignInSuccess, fail: this._onSignInFailed };
    Auth.signIn(this.refs.email.getValue(), this.refs.password.getValue(), options);
  },

  _onClickRegister: function(){
    this._navigate('/sign_up');
  },

  _onSignInFailed: function(res){
    this.setState({ errorMessage: res.responseJSON.error.message });
  },

  _onSignInSuccess: function() {
    this._navigate('/map');
  },

  render: function(){
    return (
      <div id="login_page">
        <div className="center-header">Loko</div>
        {this._errorMessage()}
        <div className="center-inputs">
          <TextField ref="email" floatingLabelText="Email" />
          <TextField ref="password" floatingLabelText="Password" type="password" />
          <div className="buttons-wrapper pull-down-10">
            <FlatButton className="sign-in-btn" label={"Sign In"} secondary={true} onClick={this._onClickSignIn} />
            <FlatButton className="register-btn" label={"Register"} primary={true} onClick={this._onClickRegister} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Login;
