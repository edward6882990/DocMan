var Loko = React.createClass({
  menuItems: [
    { routes: 'share_location', text: 'Share Location' },
    { routes: 'sign_out',       text: 'Sign Out' }
  ],

  isSignedIn: function(){
    return !!$.cookie('remember_me');
  },

  layout: function(){
    if (this.isSignedIn())
      return (
        <div>
          <AppBar />
          <LeftNav menuItems={this.menuItems} />
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
