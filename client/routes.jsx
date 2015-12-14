FlowRouter.route('/', {
	name: 'Home',
	action(params) {
		renderMainLayoutWith(<Home />);
	}
});

FlowRouter.route('/profilecard', {
	name: 'profilecard',
	action(params) {
	   renderMainLayoutWith(<ProfileCard />);
	}
});

FlowRouter.route("/login", {
    name: "Login",
    subscriptions(_params) {

    },
    action(_params) {
        renderMainLayoutWith(<UserLogin />);
    }
});

FlowRouter.route("/account", {
    name: "UserAccount",
    subscriptions(_params) {

    },
    action(_params) {
        //if not logged in the go to login page
        checkLoginStatus();
        renderMainLayoutWith(<UserAccount />);
    }
});
FlowRouter.route("/edit", {
    name: "UserPodcasts",
    subscriptions(_params) {

    },
    action(_params) {
        //if not logged in the go to login page
        checkLoginStatus();
        renderMainLayoutWith(<UserPodcasts />);
    }
});

FlowRouter.route("/create-account", {
    name: "CreateAccount",
    subscriptions(_params) {

    },
    action(_params) {
        renderMainLayoutWith(<UserCreateAccount />);
    }
});

function checkLoginStatus() {
    if (!Meteor.userId()) {
        FlowRouter.go('Login')
    }
}

function renderMainLayoutWith(component) {
    ReactLayout.render(MainLayout, {
        header: <MainHeader />,
        content: component,
        footer: <MainFooter />
    });
}
