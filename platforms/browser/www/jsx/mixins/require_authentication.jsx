var RequireAuthentication = {
  contextTypes: {
    history: React.PropTypes.object
  },

  // componentWillMount: function(){
  //   alert($.cookie('remember_token'));
  //   if (!$.cookie('remember_token')) this._navigate('/');
  // },

  _navigate: function(path){
    this.context.history.pushState(null, path);
  }
};

module.exports = RequireAuthentication;
