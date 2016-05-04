$(document).ready(function(){

  $('.magnific-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 300,
    preloader: false,
    fixedContentPos: false
  });

  var offsetTopElement = $('#fixed-bottom').position().top;
  console.log(offsetTopElement);

  if($(window).width() > 1000) {
    $('#fixed-bottom').css('position', 'fixed');
    $('#fixed-bottom').css('bottom', 0);
    $('#fixed-bottom').css('z-index', 1000);
    $('#fixed-bottom').css('width', '100%');
    $('#fixed-bottom').css('margin', 0);

    $(window).scroll(function(){
      var window_hight = $(window).height();
      var window_scrollTop = $(window).scrollTop();

      if(window_scrollTop + window_hight > offsetTopElement - 86) {
        $('#fixed-bottom').css('position', 'static');
      } else {

        $('#fixed-bottom').css('position', 'fixed');
        $('#fixed-bottom').css('bottom', 0);
        $('#fixed-bottom').css('z-index', 1000);
        $('#fixed-bottom').css('width', '100%');
        $('#fixed-bottom').css('margin', 0);
      }
    });
  }

});
