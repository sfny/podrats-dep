App = React.createClass({
  renderCards: function() {
    var profileCards = this.props.users.map(function(user){
      return(<ProfileCard user={user} key={user.name} />)
    });
    return(profileCards)
  },

  render: function() {
    var cards = this.renderCards()
    return (
      <div>
        <TopNav />
        <div className="container">
          {cards}
        </div>
      </div>
    );
  }
});
