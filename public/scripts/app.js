/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}




//   function renderTweets(tweets) {
//   // loops through tweets
//     // calls createTweetElement for each tweet
//     // takes return value and appends it to the tweets container
// }

$(function () {
  var $tweet = createTweetElement(tweetData);

  function createTweetElement(tweet) {
    let username = tweet.user.name;
    let handle = tweet.user.handle;
    let avatar = tweet.user.avatars.small
    let text = tweet.content.text
    let day = new Date(tweet.created_at);
    let today = new Date();
    let oneDay = 24*60*60*1000
    let days = Math.round(Math.abs((day-today)/oneDay)) + ' days ago'

    let $tweet = $('<article>').addClass('tweet');

    let $header = $('<header>');
    $tweet.append($header);

    let $avatar = $('<img>').addClass('avatar')
    $avatar.attr('src', avatar);
    $header.append($avatar);

    let $username = $('<h3>').addClass('userName');
    $username.text(username);
    $header.append($username);

    let $handle = $('<p>').addClass('userHandle');
    $handle.text(handle);
    $header.append($handle);

    let $content = $('<content>')
    $tweet.append($content);

    let $text = $('<p>').addClass('tweetText');
    $text.text(text);
    $content.append($text);

    let $footer = $('<footer>');
    $tweet.append($footer);

    let $days = $('<p>').addClass('footerText');
    $days.text(days);
    $footer.append($days);

    let $icon = $('<i>')

    $('#tweets-container').append($tweet);
  }


})


