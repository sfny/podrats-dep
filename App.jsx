App = React.createClass({
  renderCards: function() {
    var profileCards = this.props.users.map(function(user){
      return(<ProfileCard user={user} />)
    });
    return(profileCards)
  },

  render: function() {
    var cards = this.renderCards()
    return (
      <div>
        <TopNav />
        <h1>Here's a Title</h1>
        {cards}

      </div>
    );
  }
});
