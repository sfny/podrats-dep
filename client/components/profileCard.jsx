ProfileCard = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="center-block text-center" id="bio">
          <img className="card-img-top" src="purpleAndTeal.png" alt="Card image cap" id='avatar'></img>
          <h5 className="card-title">{this.props.name}</h5>
          <div className='bio-link' color="#818A">
            bio: <a href={this.props.url} className="card-link">Link</a>
          </div>
        </div>
        <ul className="list-group list-group-flush" id="accordion" aria-multiselectable="false">
          <li className="list-group-item">
            <div className="list-group-item-heading" id="headingOne">
            <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                99 Percent Invisible</a> </h4>
            </div>
            <div id="collapseOne" className="collapse">
              A tiny radio show about design, architecture & the 99% invisible activity that shapes our world.
              <audio src="https://soundcloud.com/iexplorer/sex-bots" autoplay>
                Your browser does not support the <code>audio</code> element.
              </audio>
          </div>
        </li>
        <li className="list-group-item">
          <div className="list-group-item-heading" role="tab" id="headingTwo">
          <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="">
              RadioLab</a> </h4>
          </div>
          <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
            Weaving stories and science into sound and music-rich documentaries.
        </div>
      </li>
      <li className="list-group-item">
        <div className="list-group-item-heading" role="tab" id="headingThree">
        <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="">
            Reply All</a> </h4>
        </div>
        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
           A show about the internet, hosted by PJ Vogt and Alex Goldman.
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
