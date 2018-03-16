//jQuery OnDocument Load
$(document).ready(function(){

  	// Add smooth scrolling to all links in navbar + footer link
  	$(".navbar a, footer a[href='#WiDeS'], .carousel .text a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 1000, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
    } // End if
	});

  	$('.flip').hover(function(){
		$(this).find('.card').toggleClass('flipped');
	});

	$('.customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },{
      breakpoint: 900,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }]
  	});

	$('.carousel').carousel({
	interval: 1000 * 15
	});

})