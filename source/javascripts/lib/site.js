//= require vendor/jquery.min.js
//= require vendor/jquery-ui-1.10.3.custom.min.js


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

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 1000, 'easeOutQuad', function () {
          window.location.hash = target;
      });
  });
});