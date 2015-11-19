App = React.createClass({
  renderCards: function() {
    var profileCards = this.props.users.map(function(user){
      return(<ProfileCard name={user.name} url={user.url} />)
    });
    console.log(profileCards)
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
