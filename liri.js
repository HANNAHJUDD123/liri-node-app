// import { request } from 'http';
const request = require('http');

const fs = require('fs');
const omdbTools = require('./omdb');
const spotifyTools = require('./spotify')
const DEFAULT_MOVIE = "Harry Potter and the Deathly Hallows";
const DEFAULT_SONG = "Beautiful Liers";

function twitter() {
   console.log("if you use a bird its called tweeting"); 
}

function spotify(title) {
    title = title || DEFAULT_SONG;
    console.log("spotify this", title);
    spotifyTools.getMusicDetails(title)
        // .then(function(info) {
        //     console.log(title)
        // }).catch(function(err) {
        //     console.log("Spotify has encounered and error:", err);
        //   });
    /* make output this like:
              Mr. Nobody (2008)
              English (USA), Rated R
              MOVIE RATING
              Rotten Tomatoes: 87%
              Actors: them
              Plot

            */


}

function omdb(movieName) {
    omdbTools.getMovieDetails(movieName || DEFAULT_MOVIE)
        .then(function(info) {
            console.log(`${info.name} (${info.year})`); // string interpolation. This is equivalent to: console.log(info.name + ' (' + info.year + ')');
            console.log(`${info.language} (${info.country}), ${info.rated}`);
            console.log(`Rotten Tomatoes score: ${info.rottenTomatoes}`);
            console.log(`Internet Movie Database: ${info.imdb}`);
            console.log(`Starring ${info.actors}`);
            console.log();
            console.log(info.plot)
        })
        .catch(function(err) {
            console.log("OMDB encounered an error:", err);
        });
}

function sayDo() {
    var contents = fs.readFileSync('./random.txt');
    /* Some things to deal with that Ben didn't...
        - what if there is a comma inside the value, eg "Harry Potter and the Deathly Hallows, Part 2"
        - what if there are multiple lines in the file? Should it run each of the commands? In that case, you need to loop over each line...
    */
    let command = contents.split(',')[0];
    let user = contents.split(',')[1];
    runCommand(command, user);
    // console.log("i will do your will");
}

function runCommand(command, secondParam) {
    switch(command) {
        case "my-tweets": return twitter();
        case "spotify-this-song": return spotify(secondParam);
        case "movie-this": return omdb(secondParam);
        case "do-what-it-says": return sayDo();
    }
}

runCommand(process.argv[2], process.argv[3]);


