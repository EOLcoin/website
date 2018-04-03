"use strict";

jQuery(document).ready(function ($) {

  $(window).load(function () {
    $(".loaded").fadeOut();
    $(".preloader").delay(1000).fadeOut("slow");
    tabs();
  });
  /*---------------------------------------------*
   * Mobile menu
   ---------------------------------------------*/
  $('#bs-example-navbar-collapse-1').find('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - 0)
        }, 1000);
        if ($('.navbar-toggle').css('display') != 'none') {
          $(this).parents('.container').find(".navbar-toggle").trigger("click");
        }
        return false;
      }
    }
  });

  /*---------------------------------------------*
   * STICKY scroll
   ---------------------------------------------*/

  //    $(".nav").localScroll();

  /*---------------------------------------------*
   * WOW
   ---------------------------------------------*/

  var wow = new WOW({
    mobile: false // trigger animations on mobile devices (default is true)
  });
  wow.init();

  /*---------------------------------------------*
   * Counter
   ---------------------------------------------*/

  $('.statistic-counter').counterUp({
    delay: 10,
    time: 2000
  });

  /* ---------------------------------------------------------------------
   Carousel
   ---------------------------------------------------------------------= */

  $('.main_home_slider').owlCarousel({
    responsiveClass: true,
    autoplay: false,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    autoplayHoverPause: true

  });

  $('.main_comment_content').owlCarousel({
    responsiveClass: true,
    autoplay: false,
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    autoplayHoverPause: true

  });

  $('.main_test_slid').owlCarousel({
    responsiveClass: true,
    autoplay: false,
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    autoplayHoverPause: true
  });

  // main-menu-scroll

  jQuery(window).scroll(function () {
    var top = jQuery(document).scrollTop();
    var height = 300;
    //alert(batas);

    if (top > height) {
      jQuery('.navbar-fixed-top').addClass('menu-scroll');
    } else {
      jQuery('.navbar-fixed-top').removeClass('menu-scroll');
    }
  });

  // scroll Up

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('.scrollup').fadeIn('slow');
    } else {
      $('.scrollup').fadeOut('slow');
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  //    $('#menu').slicknav();

  $('#mixcontent').mixItUp({
    animation: {
      animateResizeContainer: false,
      effects: 'fade rotateX(-45deg) translateY(-10%)'
    }
  });

  $('.dropdown-menu').click(function (e) {
    e.stopPropagation();
  });

  $('.main_portfolio_content').imagesLoaded(function () {
    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
    });
  });
  // Tabs
  var tabs = function () {
    $('#progetto').css('height', $('.tab-content.active').height() + 600);

    $(window).resize(function () {
      $('#progetto').css('height', $('.tab-content.active').height() + 600);
    });

    $('.tabs-nav > a').on('click', function (e) {

      var tab = $(this).data('tab');

      $('.tabs-nav > a').removeClass('active');
      $(this).addClass('active');

      $('.tab-content').removeClass('active show');

      setTimeout(function () {
        $('.tab-content[data-tab-content="' + tab + '"]').addClass('active');
        $('#progetto').css('height', $('.tab-content.active').height() + 600);
      }, 200);
      setTimeout(function () {
        $('.tab-content[data-tab-content="' + tab + '"]').addClass('show');
      }, 400);


      e.preventDefault();
    });
  };

  let dateEnd = new Date(2018, 4, 16, 12, 0, 0, 0);

  $('#clock').countdown('2018/05/08 12:00:00', function(event) {
    $(this).html(event.strftime('%D days %H:%M:%S'));
  });
});

$(document).on("scroll", function () {
  if ($(document).scrollTop() > 120) {
    $("nav").addClass("small");
  } else {
    $("nav").removeClass("small");
  }
});
