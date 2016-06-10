var HOST          = 'http://be562b70.ngrok.io';
var SIGN_IN_PATH  = '/users/sign_in';
var SIGN_OUT_PATH = '/users/sign_out';
var TOKEN_PATH    = '/authenticity_token';

var Auth = {
  getToken: function(callback){
    var fail = function(){ alert('Failed getting token!'); };
    this._tokenRequest().done(callback).fail(fail);
  },

  signIn: function(email, password, options){
    var done = function(data){
      $.cookie('user_id', data.user_id);
      $.cookie('remember_token', data.remember_token);

      if (options.done && typeof options.done == typeof Function) options.done();
    };

    var fail = options.fail;

    this._signInRequest({
      session: { email: email, password: password, remember_me: !!(options && options.remember_me) }
    })
      .done(done)
      .fail(fail);
  },

  signOut: function(){
    this._signOutRequest();
    $.removeCookie('user_id');
    $.removeCooke('remember_token');
  },

  _tokenRequest: function(){
    return $.ajax({
      url    : HOST + TOKEN_PATH,
      method : 'GET'
    });
  },

  _signInRequest: function(data){
    return $.ajax({
      url    : HOST + SIGN_IN_PATH,
      data   : data,
      method : 'POST'
    });
  },

  _signOutRequest: function() {
    return $.ajax({
      url    : HOST + SIGN_OUT_PATH,
      method : 'DELETE'
    });
  }
};

module.exports = Auth;
