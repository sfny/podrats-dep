SimpleForm = React.createClass({
  handleSubmit(event) {
  event.preventDefault();

  // Find the text field via the React ref
  var text = React.findDOMNode(this.refs.textInput).value.trim();

  Test.insert({
    text: text,
    createdAt: new Date() // current time
  });

  // Clear form
  React.findDOMNode(this.refs.textInput).value = "";
},
  render: function() {
    return (
      <form className="new-test" onSubmit={this.handleSubmit} >
        <input
          type="text"
          ref="textInput"
          placeholder="Type to add new tests" />
        </form>
    );
  }
});
