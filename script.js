


// Form submission
$('#contact-form').on('submit', function(event) {
event.preventDefault();
var name = $('#contact-name').val();
var email = $('#contact-email').val();
var message = $('#contact-message').val();
// Do something with the form data
// ...
alert('Form submitted!');
});
$(document).ready(function() {
  $('.fade-in').each(function() {
    $(this).delay($(this).data('delay')).animate({
      opacity: 1
    }, 1000);
  });
});

// Slide up elements on page load
$(document).ready(function() {
  $('.slide-up').each(function() {
    $(this).delay($(this).data('delay')).animate({
      opacity: 1,
      top: 0
    }, 1000);
  });
});

// Smooth scrolling on page links
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

// Form submission
$('#contact-form').on('submit', function(event) {
  event.preventDefault();
  var name = $('#contact-name').val();
  var email = $('#contact-email').val();
  var message = $('#contact-message').val();
  // Do something with the form data
  // ...
  alert('Form submitted!');
});

// Responsive navigation menu
$(document).ready(function() {
  $('.nav-toggle').on('click', function() {
    $('.nav-items').toggleClass('active');
  });
});






