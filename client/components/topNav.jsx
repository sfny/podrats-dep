TopNav = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
          <a className="navbar-brand" href="#"><img style={{height:"34px", width:"100px"}} src="podrats_tinylogo.png" alt="PodRats"></img></a>
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span> </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                test</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
