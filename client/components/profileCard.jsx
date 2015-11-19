ProfileCard = React.createClass({
  render: function() {
    var user = this.props.user
    return (
      <div className="card">
        <div className="center-block text-center" id="bio">
          <img className="card-img-top" src="purpleAndTeal.png" alt="Card image cap" id='avatar'></img>
          <h5 className="card-title">{user.name}</h5>
          <div className='bio-link' color="#818A">
            bio: <a href={user.url} className="card-link">Link</a>
          </div>
        </div>
        <ul className="list-group list-group-flush" id="accordion" aria-multiselectable="false">
          <li className="list-group-item">
            <div className="list-group-item-heading" id="headingOne">
            <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                {user.podcasts[0].title}</a> </h4>
            </div>
            <div id="collapseOne" className="collapse">
              {user.podcasts[0].blurb}

          </div>
        </li>
        <li className="list-group-item">
          <div className="list-group-item-heading" role="tab" id="headingTwo">
          <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="">
              {user.podcasts[1].title}</a> </h4>
          </div>
          <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
            {user.podcasts[1].blurb}
        </div>
      </li>
      </ul>
        <div className="card-block card-inverse card-info text-center">
          <a href="#" className="card-link" color="white">More</a>
        </div>
      </div>
    );
  }
});
