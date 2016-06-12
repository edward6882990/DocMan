var AddDocDialog = React.createClass({
  propTypes: {
    imageData : React.PropTypes.string,
    onCancel  : React.PropTypes.func.isRequired,
    onAdd     : React.PropTypes.func.isRequired
  },

  componentWillReceiveProps: function(props){
    this.setState({ imageData: props.imageData });
  },

  getInitialState: function(){
    return { imageData: this.props.imageData };
  },

  _onCancel: function(){
    this.props.onCancel();
  },

  _onAdd: function(){
    this.props.onAdd({ name: this.refs.name.getValue() });
  },

  render: function(){
    var modalActions = [
      { text: 'Cancel', onTouchTap: this._onCancel },
      { text: 'Add',    onTouchTap: this._onAdd }
    ];

    return (
      <Dialog
          title="Add Doc"
          actions={modalActions}
          open={!!this.state.imageData}>
        <img className="modal-image" src={"data:image/jpeg;base64," + this.state.imageData} />
        <TextField ref="name" floatingLabelText="Name" />
      </Dialog>
    );
  }
});

module.exports = AddDocDialog;
