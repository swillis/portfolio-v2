//= require vendor/jquery.min.js

// Page load state

$(function() {
  $('.slide').css({'height': (($(window).height()) )});
})

$(window).bind('resize', function(){
  $('.slide').css({'height': (($(window).height()) )});
});
