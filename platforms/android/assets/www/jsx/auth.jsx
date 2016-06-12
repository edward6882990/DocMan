var HOST                        = 'http://e5f47873.ngrok.io';

var SIGN_IN_PATH                = '/users/sign_in';
var SIGN_OUT_PATH               = '/users/sign_out';
var SIGN_UP_PATH                = '/users';
var AUTH_BY_TOKEN_PATH          = '/users/get_by_token';
var GET_AUTHENTICITY_TOKEN_PATH = '/authenticity_token';

var Auth = {
  getToken: function(callback){
    var fail = function(){ alert('Failed getting token!'); };
    this._tokenRequest().done(callback).fail(fail);
  },

  signIn: function(email, password, options){
    var done = function(data){
      $.cookie('user_id', data.user_id);
      $.cookie('remember_token', data.remember_token);
      Vent.trigger('sign_in:success');

      if (options.done && typeof options.done == typeof Function) options.done();
    };

    var fail = options.fail;

    this._signInRequest({
      session: { email: email, password: password, remember_me: true } // Always remember for now, change later
    })
      .done(done)
      .fail(fail);
  },

  signUp: function(name, email, password, passwordConfirmation, options){
    var data = {
      name                  : name,
      email                 : email,
      password              : password,
      password_confirmation : passwordConfirmation
    };

    var done = options && options.done;
    var fail = options && options.fail;

    this._signUpRequest(data).done(done).fail(fail);
  },

  signOut: function(){
    this._signOutRequest();
    $.removeCookie('user_id');
    $.removeCookie('remember_token');
    Vent.trigger('sign_out');
  },

  authenticateByToken: function(options){
    var done   = options && options.done;
    var fail   = options && options.fail;
    var always = options && options.always;

    if (!$.cookie('remember_token')) {
      if (always) always();
      return;
    }

    this._authenticateRequest()
      .done(done)
      .fail(fail)
      .always(always);
  },

  _authenticateRequest: function(){
    return $.ajax({
      url    : HOST + AUTH_BY_TOKEN_PATH,
      method : 'GET'
    });
  },

  _tokenRequest: function(){
    return $.ajax({
      url    : HOST + GET_AUTHENTICITY_TOKEN_PATH,
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

  _signOutRequest: function(){
    return $.ajax({
      url    : HOST + SIGN_OUT_PATH,
      method : 'DELETE'
    });
  },

  _signUpRequest: function(data){
    return $.ajax({
      url    : HOST + SIGN_UP_PATH,
      data   : data,
      method : 'POST'
    });
  }
};

module.exports = Auth;
