//= require vendor/jquery.min.js

// Page load state

$(function() {
  $('.slide').css({'height': (($(window).height()) )});
})

$(window).resize(function(){
  $('.slide').css({'height': (($(window).height()) )});
});

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

$(function() {
  var headHeight = $('.bio').height()/2;
  var windowHeight = $(window).height();
  var halfWay = windowHeight/2;
  $('.bio').css({
    'padding-top': halfWay - headHeight - 100
  })
})

$(window).resize(function() {
  var headHeight = $('.bio').height()/2;
  var windowHeight = $(window).height();
  var halfWay = windowHeight/2;
  $('.bio').css({
    'padding-top': halfWay - headHeight - 100
  })
})
