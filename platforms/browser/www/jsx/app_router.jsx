var Views = require('./views.jsx');
var Loko  = require('./views/loko.jsx');

var AppRouter = React.createClass({
  childeContextTypes: {
    history: React.PropTypes.object
  },

  getChildContext: function(){
    return { history: this.props.history };
  },

  isSignedIn: function(){
    return !!$.cookie('remember_token');
  },

  render: function(){
    var IndexComponent = this.isSignedIn() ? Views.Map : Views.Login;

    return (
      <Router history={this.props.history}>
        <Route path="/" component={Loko}>
          <IndexRoute component={IndexComponent}/>
          <Route path="map"     component={Views.Map}   />
          <Route path="sign_in" component={Views.Login} />
        </Route>
      </Router>
    );
  }
});

module.exports = AppRouter;
