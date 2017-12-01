const request = require('request-promise-native');

// // give it an entry point

let client = new Twitter({
    consumer_key: 'A7XHMhqbdoN6F9sBt0rdimfz3',
    consumer_secret: 'ST1ZPzpnqHStrx8XvS9sdWGBAMH7fKEMd8q1sIPTEcRU4NYDZ5',
    bearer_token: '935699151668486144-TZPRxDOk9vP3Vf4NLjcy4nUWLIK6OqM'
  });

function getMyTweets(getMyTweets) {
  if (!myTweets) {
    let msg = `No Tweets provided`;
    return Promise.reject(msg);
  }
  return request.get({
      url: `https://api.twitter.com/1.1/search/tweets.json`, 
      json: true
    }).then(function(data) {
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
console.log(data)

module.exports = {
  getMovieDetails: getMovieInfo,
};


