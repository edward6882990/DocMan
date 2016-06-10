var Loko = React.createClass({
  render: function(){
    menuItems: [
      { routes: 'share_location', text: 'Share Location' },
      { routes: 'sign_out',       text: 'Sign Out' },
    ],

    return (
      <div>
        <AppBar />
        <LeftNav menuItems={this.menuItems} />
        {this.props.children}
      </div>
    );
  }
})

module.exports = Loko;
