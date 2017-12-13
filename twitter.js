const request = require('request-promise-native');

const Twitter = require('twitter');

const fs = require('fs');



function getMyTweets(getMyTweets) {

  return request.get({
      url: `https://api.twitter.com/1.1/search/tweets.json`, 
      json: true
    }).then(function(data) {
      return {
        tweet: tweets

      };
    });
}

function myTwitter(){
	let client = new Twitter({
        consumer_key: '4mz7sgSsjXCQRFaw3UWGZOWQT',
        consumer_secret: 'gPr0lwKVoPV3MPH1sCDZAjsBS1xaKhzIGzzFbUl1f2NxnA9e5E',
        access_token_key: '935699151668486144-3IldQ8hYkjuoMJx2vrlcTkVNySZ3zSu',
        access_token_secret: 'qpS8goHFLyFRVbH7KN90dQHpSmj0vEViOjuGinGFipzSV',
      });
	let params = {
		screen_name: 'MarthaBilly2',
		count: '20',
		trim_user: false,
	}

	client.get('statuses/user_timeline', params, function(error, timeline, response){
		if(!error){
			for(tweet in timeline){
				var tDate = new Date(timeline[tweet].created_at);

				console.log("Tweet #: " + (parseInt(tweet)+1) + " ");
				console.log(tDate.toString().slice(0, 24) + " ");
				console.log(timeline[tweet].text);
				console.log("\n");

				fs.appendFile('log.txt', "Tweet #: " + (parseInt(tweet)+1) + "\n");
				fs.appendFile('log.txt', timeline[tweet].text + "\n");
				fs.appendFile('log.txt', "\n");

			}
		} 
	})

}
module.exports = {
  getMyTweets: myTwitter

  
};