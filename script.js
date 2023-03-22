$(function () {

  var fadeSpeed1 = 1000;
  var fadeSpeed2 = 2000;
  var fadeSpeed3 = 3000;
<<<<<<< HEAD
=======
  var fadeSpeed4 = 4000;
>>>>>>> 221f7fae66b99c16f6463e8e2eaca61d58ff48fc


  //ページ訪問時の動作
  $('.header-left')
    .css({ opacity: '0.0' })
    .animate({ opacity: '1' }, fadeSpeed1);

<<<<<<< HEAD
  $('.header-left-smaph')
    .css({ opacity: '0.0' })
    .animate({ opacity: '1' }, fadeSpeed1);

=======
>>>>>>> 221f7fae66b99c16f6463e8e2eaca61d58ff48fc
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
    .animate({ opacity: '0.5' }, fadeSpeed4);


  //modal
  $('.fa-envelope').click(function () {
    $('#contact-modal').fadeIn();
  });

  $('#close-modal').click(function () {
    $('#contact-modal').fadeOut();
  });

});