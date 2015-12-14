UserPodcasts = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},
    getInitialState() {
      return {
          errors: {},
      }
    },
    getMeteorData() {
      return {
        currentUser: Meteor.user()
      };
    },

    logoutUser() {
      Meteor.logoutUser();
      FlowRouter.go("Home");
    },

onSubmit(event) {
    event.preventDefault();
    var firstShow = $(event.target).find("[name=firstShow]").val();
    var secondShow = $(event.target).find("[name=secondShow]").val();
    var thirdShow = $(event.target).find("[name=thirdShow]").val();

    var errors = {};

    if (!firstShow) {
        errors.showerror = "Podcast URL Required"
    }
    if (!secondShow) {
        errors.showerror = "Podcast URL Required"
    }
    if (!thirdShow) {
        errors.showerror = "Podcast URL Required"
    }

    this.setState({
        errors: errors
    });

    if (!_.isEmpty(errors)) {
        return;
    }

    var showList = {
      firstShow: user.firstShow,
      secondShow: user.secondShow,
      thirdShow: user.thirdShow
    }

    Meteor.call("updateUser", {
        showList: showList
    }, (_error) => {
        if (_error) {
            this.setState({
                errors: {'none': _error.reason}
            });

            return;
        } else {
            FlowRouter.go('UserPodcasts');
        }
      });
    },
    render() {

        if (!this.data.currentUser) {
            return (<div/>)
        } else {
            let user = this.data.currentUser;

    return (
            <div className="container">
              <div className="row">

                  <div className="col-md-6 col-md-offset-4 col-lg-6 col-lg-offset-4 col-xl-4 col-xl-offset-4">
                    <h1>Top Podcasts</h1>
                    <form onSubmit={this.onSubmit}>
                        <AuthErrors errors={this.state.errors}/>

                    <FormInput hasError={!!this.state.errors.showerror} name="firstShow" type="text"
                      label="First Show" value={user.profile.firstShow}/>
                    <FormInput hasError={!!this.state.errors.showerror} name="secondShow" type="text"
                      label="Second Show" value={user.profile.secondShow}/>
                    <FormInput hasError={!!this.state.errors.showerror} name="thirdShow" type="text"
                      label="Third Show" value={user.profile.thirdShow}/>
                    <input type="submit" className="btn btn-primary"/>
                    </form>
                  </div>
                </div>
              </div>
          )
        }
      }
});
