//= require vendor/jquery.min.js

// Page load state

$(document).ready(function() {
  $('.splitter').hide();
  // $('#homepage, nav').hide();
});


// Load homepage

$(window).load(function() {
  $('#homepage').fadeIn(3000);
});


// Engage splitter

$('body').on('click', '.open-split', function() {
  $('#homepage').fadeOut(200);
  $('nav').delay(200).slideUp(300);
  $('.splitter').delay(500).fadeIn(500);
  $('body').removeClass("glass").delay(500).queue(function(next){
    $(this).addClass("glass");
    next();
});
})


// show splitter descriptions
