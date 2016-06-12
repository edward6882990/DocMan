var AddDocDialog = require('./loko/add_doc_dialog.jsx');

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

  _onRightIconButtonTouchTap: function(){
    var _this = this;

    var onSuccess = function(imageData){
      _this.setState({ imageData: imageData });
      _this = null;
    };

    onFailure = function(){
    };

    navigator.camera.getPicture(onSuccess, onFailure, { destinationType: Camera.DestinationType.DATA_URL });
  },

  _onAddDocDialogAdd: function(data){
    var _this = this;
    var done = function(){
      _this.setState({ imageData: null });
      _this = null;
    };

    var fail = function(){
      alert("Failed creating Doc!");
    };

    var always = function(){

    };

    var options = { done: done, fail: fail, always: always };

    DocHub.createDoc(this.state.imageData, data.name, options);
  },

  _onAddDocDialogCancel: function(){
    this.setState({ imageData: null });
  },

  layout: function(){
    if (!!this.state.isSignedIn)
      return (
        <div>
          <AppBar
            onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
            iconElementRight={
              <IconButton onTouchTap={this._onRightIconButtonTouchTap} iconClassName="material-icons">camera_enhance</IconButton>
            }/>
          <LeftNav ref="leftNav" menuItems={this.menuItems} docked={false} />
          <AddDocDialog
            imageData={this.state.imageData}
            onCancel={this._onAddDocDialogCancel}
            onAdd={this._onAddDocDialogAdd} />
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
