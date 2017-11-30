const request = require('request-promise-native');

// // give it an entry point

function getMovieInfo(movieName) {
  if (!movieName) {
    let msg = `No movie name provided`;
    return Promise.reject(msg);
  }
  return request.get({
      `uri`: `http://www.omdbapi.com/?type=movie&t=${movieName}&apikey=f6cdb73`,
      json: true
    }).then(function(data) {
      // console.log(data)
      let rottenTomatoes;
      let imdb;
      for (let rating of data.Ratings) {
        if (rating.Source === 'Rotten Tomatoes') {
          rottenTomatoes = rating.Value;
        } else if(rating.Source === 'Internet Movie Database') {
          imdb = rating.Value;
        }
      }
      return {
        name: data.Title,
        year: data.Year,
        rated: data.Rated,
        rottenTomatoes: rottenTomatoes,
        imdb: imdb,
        country: data.Country,
        language: data.Language,
        plot: data.Plot,
        actors: data.Actors

      };
    });
}

module.exports = {
  getMovieDetails: getMovieInfo,
};

