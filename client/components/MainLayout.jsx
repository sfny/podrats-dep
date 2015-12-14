MainFooter = React.createClass({

    componentDidMount() {
        // Use Meteor Blaze to render login buttons
        this.view = Blaze.render(Template.alerts,
            ReactDOM.findDOMNode(this.refs.alerts));
    },

    componentWillUnmount() {
        // Clean up Blaze view
        Blaze.remove(this.view);
    },
    render() {

        return (
            <div className="footer container">
                <span ref="alerts"/>
                <div className="footer-content">
                </div>
                <div className="footer-footer">
                </div>
            </div>
        )
    }
});

MainHeader = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    handleLogout() {
        Meteor.logout();

        FlowRouter.go("/");
    },
    render() {
        let loginButton;
        let { currentUser } = this.data;

        if (currentUser) {
            loginButton = (
                <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
            )
        } else {
            loginButton = (
                <li><a href="/login">Login</a></li>
            )
        }

        return (
            <nav className="navbar navbar-dark bg-inverse">
                <div className="container-fluid">
                        <a className="navbar-brand" href="#">Podrats</a>
                        <div className="nav-item pull-right">
                        <button className="navbar-toggler" type="button" color="white" data-toggle="collapse"
                                data-target="#CollapsingNavbar" aria-expanded="false"> &#9776;
                        </button>
                        </div>
                        <div className="collapse pull-right" id="CollapsingNavbar">
                          <ul className="nav navbar-right">
                              <li><a href="/">Home</a></li>
                              <li><a href="/account">Account</a></li>
                              {loginButton}
                          </ul>
                        </div>
                </div>
            </nav>
        )
    }
});

MainLayout = React.createClass({
    render() {
        return (
            <div>
                {this.props.header}

                {this.props.content}

                {this.props.footer}
            </div>
        )
    }
});
