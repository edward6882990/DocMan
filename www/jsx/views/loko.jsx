var Loko = React.createClass({
  menuItems: [
    { routes: 'sign_out', text: 'Sign Out' }
  ],

  componentWillMount: function(){
    Vent.on('sign_in:success', this._onSignInSuccess);
    Vent.on('sign_out', this._onSignOut)
  },

  getInitialState: function(){
    return { isSignedIn: this.isSignedIn() };
  },

  isSignedIn: function(){
    return !!$.cookie('remember_me');
  },

  _onSignInSuccess: function(){
    this.setState({ isSignedIn: true });
  },

  _onSignOut: function(){
    this.setState({ isSignedIn: false });
  },

  _onLeftIconButtonTouchTap: function(){
    this.refs.leftNav.toggle();
  },

  layout: function(){
    if (!!this.state.isSignedIn)
      return (
        <div>
          <AppBar
            onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
            iconElementRight={
              <IconButton iconClassName="material-icons">camera_enhance</IconButton>
            }/>
          <LeftNav ref="leftNav" menuItems={this.menuItems} docked={false} />
        </div>
      );
    else
      return null;
  },

  render: function(){
    return (
      <div>
        {this.layout()}
        {this.props.children}
      </div>
    );
  }
});

module.exports = Loko;
