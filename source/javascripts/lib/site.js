//= require vendor/jquery.min.js

// Page load state

$(document).ready(function() {
  $('.splitter').hide();
});


// Engage splitter

$('body').on('click', '.open-split', function() {
  $('nav').slideUp(200);
  $('#homepage').delay(150).fadeOut(200);
  $('.splitter').delay(400).fadeIn(500);
})
