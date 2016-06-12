var Home = React.createClass({
  mixins: [RequireAuthentication],

  componentDidMount: function(){
    var _this = this;

    var done = function(data){
      _this.setState({ docs: _this.categorizeDocs(data) })
    };

    var fail = function(){
      alert('failed to get docs!');
    };

    var options = { done: done, fail: fail };

    DocHub.getDocs(options);
  },

  getInitialState: function() {
    return { docs: {} };
  },

  categorizeDocs: function(docs){
    var categorizedDocs = {};

    _.each(docs, function(doc){
      if (!categorizedDocs[doc.classification]) categorizedDocs[doc.classification] = []
      categorizedDocs[doc.classification].push(doc)
    });

    return categorizedDocs;
  },

  _content: function(){
    var EmptyView = (<div className="empty-view">No Document.</div>);

    if (_.isEmpty(this.state.docs))
      return EmptyView;
    else
      return (<div>Something</div>);
  },

  render: function(){
    return (
      <div id="home_page">
        {this._content()}
      </div>
    );
  }
});

module.exports = Home;
