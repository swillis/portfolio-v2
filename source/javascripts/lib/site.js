//= require vendor/jquery.min.js


// Page load state


// Set home slide width

$(function() {
  $('.slide').css({'min-height': (($(window).height()) )});
})

$(window).resize(function(){
  $('.slide').css({'min-height': (($(window).height()) )});
});


// center home slide

$(function() {
  var headHeight = $('.centered').height()/2;
  var windowHeight = $(window).height();
  var halfWay = windowHeight/2;
  var navHeight = $('nav').height();
  $('.centered').css({
    'padding-top': halfWay - headHeight - navHeight
  })
})

$(window).resize(function() {
  var headHeight = $('.centered').height()/2;
  var windowHeight = $(window).height();
  var halfWay = windowHeight/2;
  var navHeight = $('nav').height();
  $('.centered').css({
    'padding-top': halfWay - headHeight - navHeight
  })
})


// Smooth scroll

function goToByScroll(id){
  $('html, body').animate({scrollTop: $("#"+id).offset().top - 60},'slow');
}