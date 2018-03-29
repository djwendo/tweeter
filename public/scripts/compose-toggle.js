//Functionality for Compose button.
//Hides composer on page load and toggles up and down on Compose button click.

$(() => {
  $('.new-tweet').hide();

  $('#compose-button').click(function() {
    $('.new-tweet').slideToggle();
      $('#compose-tweet textarea').focus();
  });
})