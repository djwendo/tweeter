$(() => {

  function createTweetElement(tweet) {
    const username = tweet.user.name;
    const handle = tweet.user.handle;
    const avatar = tweet.user.avatars.small
    const text = tweet.content.text
    const time = moment(tweet.created_at).fromNow();

    const $tweet = $('<article>').addClass('tweet');

    const $header = $('<header>');
    $tweet.append($header);

    const $avatar = $('<img>').addClass('avatar')
    $avatar.attr('src', avatar);
    $header.append($avatar);

    const $username = $('<h3>').addClass('userName');
    $username.text(username);
    $header.append($username);

    const $handle = $('<p>').addClass('userHandle');
    $handle.text(handle);
    $header.append($handle);

    const $content = $('<content>')
    $tweet.append($content);

    const $text = $('<p>').addClass('tweetText');
    $text.text(text);
    $content.append($text);

    const $footer = $('<footer>');
    $tweet.append($footer);

    const $time = $('<p>').addClass('footerText').text(time);
    $footer.append($time);

    const $iconHeart = $('<i>').addClass('icon fas fa-heart');
    $footer.append($iconHeart);

    const $iconRT = $('<i>').addClass('icon fas fa-retweet');
    $footer.append($iconRT);

    const $iconFlag = $('<li>').addClass('icon fas fa-flag');
    $footer.append($iconFlag);

    return $tweet;
  }

  function renderTweets(data) {
    for (let tweet of data) {
      const newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend(newTweet);
    }
  }

  function loadTweets() {
    $.get('/tweets/').done((content) => {
      renderTweets(content);
    })
  }

  $('#compose-tweet').submit(function(e) {
    e.preventDefault();
    let text = $(this).find('textarea').val().trim();
    console.log('text is',text);
    if (text.length > 0 && text.length <= 140) {
      $.post('/tweets/', {text}).done((response) => {
        $('#compose-tweet .counter').text('140');
        $('#compose-tweet textarea').val('');
        $('#tweets-container').empty();
        loadTweets();
      });
    } else if (text && text.length > 140) {
      $.flash(`"Brevity is the soul of wit." &mdash; Shakespeare <br/> If you want more than 140 characters, write a blog.`);
    } else if (text.length === 0) {
      $('#compose-tweet textarea').val('');
      $.flash('I think you forgot something... Your tweet looks empty.');
    }
  })


  loadTweets();
})


