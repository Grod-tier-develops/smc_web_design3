$(document).ready(function() {
  //we write eveything

  $('.carousel').carousel({
    interval: 330,
  });

  $('#carouselControl').click(function() {
    if ($('#carouselControl').hasClass('paused')) {
      $('#myCarousel').carousel('cycle');
      $('#carouselControl').text('paused');
    } else {
      $('#myCarousel').carousel('pause');
      $('#carouselControl').text('play');
    }

    $('#carouselControl').toggleClass('paused');
  });

  $('#modalLauncher').click(function() {
    $('#exampleModal').modal({
      backdrop: false,
    });
  });
});
