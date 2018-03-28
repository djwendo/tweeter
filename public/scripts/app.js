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

const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];




$(() => {

  function renderTweets(tweets) {
    for (eachTweet in tweets) {
      let tweet = tweets[eachTweet];
      createTweetElement(tweet);
    }
  }

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

    let $iconHeart = $('<i>').addClass('icon fas fa-heart');
    $footer.append($iconHeart);

    let $iconRT = $('<i>').addClass('icon fas fa-retweet');
    $footer.append($iconRT);

    let $iconFlag = $('<li>').addClass('icon fas fa-flag');
    $footer.append($iconFlag);

    $('#tweets-container').append($tweet);
    return $tweet;
  }

renderTweets(data);
})


