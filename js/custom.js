$('.carousel').carousel({
  interval: 3000,
  pause: false
})
$('#carousel-cars').on('slide.bs.carousel', function() {
  console.log("Begun sliding");
  $('.carousel-caption').removeClass('zoomit');
})
$('#carousel-cars').on('slid.bs.carousel', function() {
  console.log("All done sliding!");
  $('.carousel-caption').addClass('zoomit');
})