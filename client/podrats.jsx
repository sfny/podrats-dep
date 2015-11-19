if (Meteor.isClient) {
  // This code is executed on the client only
  Meteor.startup(function () {
    var appData = {
      users: [
        {
          name: "Aaron",
          url: "http://aaronstrick.com",
          podcasts: [
            {
              title: "99 Percent Invisible",
              blurb: "A tiny radio show about design, architecture & the 99% invisible activity that shapes our world."
            }
          ]
        },
        {
          name: "Jacob",
          url: "http://fuckcoding.com",
          podcasts: [
            {
              title: "Reply All",
              blurb: "A show about the internet, hosted by PJ Vogt and Alex Goldman."
            },
            {
              title: "Radiolab",
              blurb: "Weaving stories and science into sound and music-rich documentaries."
            }
          ]
        },
        {
          name: "Ben",
          url: "http://ben.com",
          podcasts: [
            {
              title: "Guardian Football Weekly",
              blurb: "A weekly stroll through world football."
            },
            {
              title: "Radiolab",
              blurb: "Weaving stories and science into sound and music-rich documentaries."
            }
          ]
        }
      ]
    }
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App {...appData} />, document.getElementById("render-target"));
  });
}
