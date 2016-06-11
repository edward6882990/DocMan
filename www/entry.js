window.React    = require('react');
window.ReactDOM = require('react-dom');
window.$        = require('jquery');
window.Mui      = require('material-ui/lib');
window.History  = require('history');
window._        = require('lodash');

require('jquery.cookie');

window.TextField  = Mui.TextField;
window.FlatButton = Mui.FlatButton;
window.AppBar     = Mui.AppBar;
window.LeftNav    = Mui.LeftNav;

window.ReactRouter = require('react-router');
window.Router      = ReactRouter.Router;
window.Route       = ReactRouter.Route;
window.IndexRoute  = ReactRouter.IndexRoute;

window.Auth = require('./jsx/auth.jsx');

var Login   = require('./jsx/views/login.jsx');
var Map     = require('./jsx/views/map.jsx');
var SignUp  = require('./jsx/views/sign_up.jsx');
var Views   = require('./jsx/views.jsx');

var Loko = require('./jsx/views/loko.jsx');

var AppRouter = require('./jsx/app_router.jsx');

require('./jsx/index.jsx');
