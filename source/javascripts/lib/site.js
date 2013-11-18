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


// Fade in's

$(window).load(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},700);
            }
        }); 
    });
});

// homepage fade in

$(window).load(function() {
  $('nav').animate({'opacity':'1'},700, 'easeOutQuad');
  $('.headline').delay(700).animate({'opacity':'1'}, 700, 'easeOutQuad');
})