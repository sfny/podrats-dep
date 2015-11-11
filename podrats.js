if (Meteor.isClient) {
  getPodcasts = function getPodcasts(user, callback) {
  Meteor.call("getPodcasts", user, callback);
    console.log(res);
  }
}

if (Meteor.isServer) {
  var SoundCloudAudio = Meteor.npmRequire('soundcloud-audio');
  console.log('SCAudio');
  var scPlayer = new SoundCloudAudio('82828b8c85f9e9d7dd35b33ea9370392');

  console.log('scPlayer');

    Meteor.methods({
      'getPodcasts': function getPodcasts(user) {
        var podcast = Async.runSync(function(done) {
          console.log('in FXN');
          scPlayer.play({streamUrl: 'https://api.soundcloud.com/tracks/185533328/stream'}, function (err, data) {
            console.log('in resolve call')
            done(null, data);
          });
        });
        console.log('returning...');
        return podcast.result;
      }
    });
}
