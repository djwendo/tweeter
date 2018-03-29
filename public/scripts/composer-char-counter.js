//Implements character counter on input data.

$(document).ready(function() {
  $('textarea').on('input', function() {
    var count = $(this).val().length;
    var charCounter = $(this).parent().find(".counter");
    charCounter.text(140 - count);
    if (count > 140) {
      $(".counter").css("color", "#ff0000");
    } else {
      $(".counter").css("color", "#244751");
    }
  });
});