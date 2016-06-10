window.React    = require('react');
window.ReactDOM = require('react-dom');
window.$        = require('jquery');
window.Mui      = require('material-ui/lib');

require('jquery.cookie');

window.TextField  = Mui.TextField;
window.FlatButton = Mui.FlatButton;

window.Auth = require('./jsx/auth.jsx');

var Loko = require('./jsx/loko.jsx');

require('./jsx/index.jsx');
