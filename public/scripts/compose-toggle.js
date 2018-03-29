$(() => {
  $('.new-tweet').hide();

  $('#compose-button').click(function() {
    $('.new-tweet').slideToggle();
      $('#compose-tweet textarea').focus();
  });
})