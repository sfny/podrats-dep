if (Meteor.isClient) {
  SC.initialize({
    client_id: '82828b8c85f9e9d7dd35b33ea9370392'
  });

    SC.get('/tracks/293', function(track) {
      SC.oEmbed(track.permalink_url, document.getElementById('player'));
    });
}

if (Meteor.isServer) {
}
