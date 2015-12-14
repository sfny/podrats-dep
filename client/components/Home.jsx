Home = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    getInitialState() {
        return {
            loggedIn: false
        }
    },

    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },

    componentDidMount() {
        console.log("mounted");
    },

    render() {

        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="text-center">This is the Home Component</h1>
                        <p className="text-center">The fun starts here</p>
                    </div>
                </div>
                <div className="container">
                </div>
            </div>
        )
    }
});
