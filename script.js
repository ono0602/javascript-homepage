$(function () {

  var fadeSpeed1 = 2000;
  var fadeSpeed2 = 4000;
  var fadeSpeed3 = 5000;


  //ページ訪問時の動作
  $('.header-left')
    .css({ opacity: '0.0' })
    .animate({ opacity: '1' }, fadeSpeed1);

  $('.header-left-smaph')
    .css({ opacity: '0.0' })
    .animate({ opacity: '1' }, fadeSpeed1);


  $('.fa-instagram')
    .css({ opacity: '0.0' })
    .animate({ opacity: '1' }, fadeSpeed2);

  $('.fa-envelope')
    .css({ opacity: '0.0' })
    .animate({ opacity: '1' }, fadeSpeed2);


  $('.content')
    .css({ opacity: '0.0' })
    .animate({ opacity: '1' }, fadeSpeed3);

  $('.content-smaph')
    .css({ opacity: '0.0' })
    .animate({ opacity: '1' }, fadeSpeed3);

  $('footer')
    .css({ opacity: '0.0' })
    .animate({ opacity: '0.7' }, fadeSpeed3);


  //modal
  $('.fa-envelope').click(function () {
    $('#contact-modal').fadeIn();
  });

  $('#close-modal').click(function () {
    $('#contact-modal').fadeOut();
  });

});