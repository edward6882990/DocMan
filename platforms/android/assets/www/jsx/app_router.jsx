var Views = require('./views.jsx');
var Loko  = require('./views/loko.jsx');

var AppRouter = React.createClass({
  childContextTypes: {
    history: React.PropTypes.object
  },

  getChildContext: function(){
    return { history: this.props.history };
  },

  isSignedIn: function(){
    return !!$.cookie('remember_token');
  },

  render: function(){
    var IndexComponent = this.isSignedIn() ? Views.Home : Views.Login;

    return (
      <Router history={this.props.history}>
        <Route path="/" component={Loko}>
          <IndexRoute component={IndexComponent}/>
          <Route path="home"     component={Views.Home}  />
          <Route path="sign_in" component={Views.Login}  />
          <Route path="sign_up" component={Views.SignUp} />
        </Route>
      </Router>
    );
  }
});

module.exports = AppRouter;
