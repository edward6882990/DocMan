window.React      = require('react');
window.ReactDOM   = require('react-dom');
window.$          = require('jquery');
window.Mui        = require('material-ui/lib');
window.History    = require('history');
window._          = require('lodash');

require('jquery.cookie');
require('react-tap-event-plugin')();

window.TextField  = Mui.TextField;
window.FlatButton = Mui.FlatButton;
window.AppBar     = Mui.AppBar;
window.LeftNav    = Mui.LeftNav;
window.IconButton = Mui.IconButton;
window.Dialog     = Mui.Dialog;

window.ReactRouter = require('react-router');
window.Router      = ReactRouter.Router;
window.Route       = ReactRouter.Route;
window.IndexRoute  = ReactRouter.IndexRoute;

window.Auth   = require('./jsx/auth.jsx');
window.DocHub = require('./jsx/dochub.jsx');
window.Vent   = require('./jsx/vent.jsx');

window.RequireAuthentication = require('./jsx/mixins/require_authentication.jsx');

var Login        = require('./jsx/views/login.jsx');
var Home         = require('./jsx/views/home.jsx');
var SignUp       = require('./jsx/views/sign_up.jsx');
var AddDocDialog = require('./jsx/views/loko/add_doc_dialog.jsx');
var Views        = require('./jsx/views.jsx');

var Loko = require('./jsx/views/loko.jsx');

var AppRouter = require('./jsx/app_router.jsx');

require('./jsx/index.jsx');

window.HOST                        = 'http://d91f6b8b.ngrok.io';

window.SIGN_IN_PATH                = '/users/sign_in';
window.SIGN_OUT_PATH               = '/users/sign_out';
window.SIGN_UP_PATH                = '/users';
window.AUTH_BY_TOKEN_PATH          = '/users/get_by_token';
window.GET_AUTHENTICITY_TOKEN_PATH = '/authenticity_token';
window.CREATE_DOC_PATH             = '/docs';
window.GET_DOCS_PATH               = '/docs';
