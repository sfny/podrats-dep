if (Meteor.isClient) {
  // This code is executed on the client only
  Meteor.startup(function () {
    var appData = {
      users: [
        {
          name: "Aaron",
          url: "http://aaronstrick.com"
        },
        {
          name: "Jacob",
          url: "http://fuckcoding.com"
        },
        {
          name: "Ben",
          url: "http://ben.com"
        }
      ]
    }
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App {...appData} />, document.getElementById("render-target"));
  });
}
