(function ($) {
  new WOW({ mobile: false }).init();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
  });
})(jQuery);
