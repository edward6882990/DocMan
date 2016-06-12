var DocHub = {
  getDocs: function(options){
    var done = options && options.done;
    var fail = options && options.fail;

    this._getDocsRequest()
      .done(done)
      .fail(fail);
  },

  createDoc: function(image_data, name, options){
    var data = { image_data: image_data, name: name, user_id: '1' }; //TODO: resolve this hardcoded id after resolving sessions problem

    var done   = options && options.done;
    var fail   = options && options.fail;
    var always = options && options.always;

    this._createDocRequest(data)
      .done(done)
      .fail(fail)
      .always(always);
  },

  _getDocsRequest: function(){
    return $.ajax({
      url    : HOST + GET_DOCS_PATH,
      method : 'GET'
    })
  },

  _createDocRequest: function(data){
    return $.ajax({
      url    : HOST + CREATE_DOC_PATH,
      data   : data,
      method : 'POST'
    });
  }
};

module.exports = DocHub;
