if (Meteor.isServer) {
    Meteor.methods({
      'xmlGetter':function(podSource){
          HTTP.call('GET', podSource, {},
            function(callError,callResponse){
                //console.log('xml',callResponse);
                xml2js.parseString(callResponse.content, function (jsError, jsResult) {
                    console.error('errors',jsError);
                    console.log('xml to js',jsResult);
                });
            }
          );
      }
    });
}
