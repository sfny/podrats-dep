Deck = React.createClass({
  renderCards: function() {
    var user = this.props.user
    var profileCards = this.props.users.map(function(user){
      return(<ProfileCard user={user} key={user.name} />)
    });
    return (profileCards);
  },
  render() {
    var cards = this.renderCards()
    return (cards
    );
  }
});
