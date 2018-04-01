//Implements character counter on tweet input data.

$(document).ready(function() {
  $('textarea').on('input', function() {
    const count = $(this).val().length;
    const charCounter = $(this).parent().find(".counter");
    charCounter.text(140 - count);
    if (count > 140) {
      $(".counter").css("color", "#ff0000");
    } else {
      $(".counter").css("color", "#244751");
    }
  });
});