ProfileCard = React.createClass({
  renderAvatar: function(user) {
    return (
      <div className="center-block text-center" id="bio">
        <img className="card-img-top" src="purpleAndTeal.png" alt="Card image cap" id='avatar'></img>
        <h5 className="card-title">{user.name}</h5>
        <div className='bio-link' color="#818A">
          bio: <a href={user.url} className="card-link">Link</a>
        </div>
      </div>
    )
  },
  renderPodcasts: function(user) {
    var podList = [];
    var showMore = true;
    for (i = 0; i < 3; i++) {
      if (user.podcasts[i] === undefined) {
        showMore = false;
        break;
      }
      podList.push(this.renderPodRow(user, i))
    }
    if (showMore) {
      var showMoreButton = this.renderButton()
    }
    return (
      <ul className="list-group list-group-flush" id="accordion" aria-multiselectable="false">
        {podList}
      </ul>
        {showMoreButton}

    )
  },
  renderPodRow: function(user, num){
    return (
      <li className="list-group-item">
        <div className="list-group-item-heading" id="headingOne">
          <h4 className="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
              {user.podcasts[num].title}
            </a>
          </h4>
        </div>
        <div id="collapseOne" className="collapse">
          {user.podcasts[num].blurb}
        </div>
      </li>
    )
  },
  renderButton: function() {
    return (
      <div className="card-block card-inverse card-info text-center">
        <a href="#" className="card-link" color="white">More</a>
      </div>
    )
  },

  render: function() {
    var user = this.props.user
    return (
      <div className="card">
        {this.renderAvatar(user)}
        {this.renderPodcasts(user)}
      </div>
    );
  }
});
