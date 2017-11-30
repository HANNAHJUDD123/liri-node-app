// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

const request = require('request-promise-native');


const Spotify = require('node-spotify-api');

function getMusicInfo_ALT(title) {
    console.log("hey whats up", title);
    if (!title) {
        let msg = `No title name provided`;
        return Promise.reject(msg);
    }
    // let uri = "https://api.spotify.com/v1/search?q=" + title + "&type=track&limit=1"
    let spotify = new Spotify({
        id: '77b0821be96c46afbe4dcc7c44d26280',
        secret: '1efca9f940b44fbe9f09c5adb60dac79'
    });
    spotify.search({ type: 'track', query: title })
    
        .then(function(data) {
            console.log('tracks:', data.tracks);
            // return {
            //     title: data.tracks.items[0]
            //   };
        });
}

// spotify.search({type: 'track', query: 'All the Small Things' })
//  .then(function(response) {
//    console.log(response);
//  })

module.exports = {
    getMusicDetails: getMusicInfo_ALT
};


  // * Client ID 77b0821be96c46afbe4dcc7c44d26280
// Client Secret 1efca9f940b44fbe9f09c5adb60dac79 