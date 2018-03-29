/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(() => {


  function loadTweets() {
    $.get('/tweets/').done((tweets) => {
      renderTweets(tweets);
    })
  }

  loadTweets();

  $('#compose-tweet').submit(function(e) {
    e.preventDefault();
    let data = $(e.target).serialize();
    let tweetText = data.slice(5);
    let tweetLength = tweetText.length
    if (tweetLength > 0 && tweetLength <= 140) {
      $.post('/tweets/', data).done((response) => {
        $('#compose-tweet textarea').val('');
        loadTweets();
      });
    } else if (data && tweetLength > 140) {
      $.flash(`"Brevity is the soul of wit." &mdash; Shakespeare </br> If you want more than 140 characters, write a blog.`);
    } else if (tweetLength === 0) {
      $.flash('I think you forgot something... Your tweet is empty.');
    }

  })

  function renderTweets(tweets) {
    for (let tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend(newTweet);
    }
  }

  function createTweetElement(tweet) {
    let username = tweet.user.name;
    let handle = tweet.user.handle;
    let avatar = tweet.user.avatars.small
    let text = tweet.content.text
    let time = moment(tweet.created_at).fromNow();

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

    let $time = $('<p>').addClass('footerText').text(time);
    $footer.append($time);

    let $iconHeart = $('<i>').addClass('icon fas fa-heart');
    $footer.append($iconHeart);

    let $iconRT = $('<i>').addClass('icon fas fa-retweet');
    $footer.append($iconRT);

    let $iconFlag = $('<li>').addClass('icon fas fa-flag');
    $footer.append($iconFlag);

    return $tweet;
  }

})


