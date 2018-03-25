//jQuery OnDocument Load
$(document).ready(function(){

  	// Add smooth scrolling to all links in navbar + footer link
  	$(".navbar a, footer a[href='#WiDeS'], .carousel .text a, .dropbtn").on('click', function(event) {
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
		}, 'slow', function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
    } // End if
	});

  	$('.flip').hover(function(){
		$(this).find('.card').toggleClass('flipped');
	});

	$('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    fade: false,
    cssEase: 'linear',
    pauseOnHover: true
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

	$('#myCarousel').carousel({
	interval: 1000 * 15
	});

  $('#newsCarousel').carousel({
  interval: 1000 * 15
  });

  $(".item div.news-fill, .carousel-control.right, .carousel-control.left").hover(function(){
      $(".carousel.textNews").removeClass("hidden");
      }, function(){
      $(".carousel.textNews").addClass("hidden");
  });

})