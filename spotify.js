const request = require('request-promise-native');


const Spotify = require('node-spotify-api');

function getMusicInfo_ALT(title) {
    if (!title) {
        let msg = `No title name provided`;
        return Promise.reject(msg);
    }
    let spotify = new Spotify({
        id: '77b0821be96c46afbe4dcc7c44d26280',
        secret: '1efca9f940b44fbe9f09c5adb60dac79'
    });
    spotify.search({ type: 'track', query: title })
    
        .then(function(data) {
            console.log('tracks:', data.tracks);
            return {
                artists: data.artists
        
                
        
              };
        });
}


module.exports = {
    getMusicDetails: getMusicInfo_ALT
};


  // * Client ID 77b0821be96c46afbe4dcc7c44d26280
// Client Secret 1efca9f940b44fbe9f09c5adb60dac79 