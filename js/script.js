$(function() {

	$('.item-item').slick({
		dots: true,
                autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},

		]

	});
	



	$('.testimonialsItem-slick').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},

		]

	});

	


	$(window).on('scroll', function() {

		var w_top = $(this).scrollTop();
						

		if(w_top + 630 >= $('.aboutUs').offset().top){
			$('.aboutUs').addClass('animated zoomIn').css('opacity', 1);
		}

		if(w_top + 630 >= $('.ourTeam').offset().top){
			$('.ourTeam').addClass('animated zoomIn').css('opacity', 1);
		}

		if(w_top + 630 >= $('.ourServices').offset().top){
			$('.ourServices').addClass('animated zoomIn').css('opacity', 1);
		}
		
		if(w_top + 630 >= $('.design').offset().top){
			$('.design').addClass('animated bounceIn').css('opacity', 1);
		}

		if(w_top + 630 >= $('.apps').offset().top){
			$('.apps').addClass('animated bounceIn').css('opacity', 1);
		}

		if(w_top + 630 >= $('.photography').offset().top){
			$('.photography').addClass('animated bounceIn').css('opacity', 1);
		}

		if(w_top + 630 >= $('.marketing').offset().top){
			$('.marketing').addClass('animated bounceIn').css('opacity', 1);
		}

		if(w_top + 630 >= $('.Work').offset().top){
			$('.Work').addClass('animated zoomIn').css('opacity', 1);
		}

		if(w_top + 630 >= $('.one').offset().top){
			$('.one').addClass('animated slideInUp');
		}

		if(w_top + 630 >= $('.two').offset().top){
			$('.two').addClass('animated slideInUp');
		}

		if(w_top + 630 >= $('.three').offset().top){
			$('.three').addClass('animated slideInUp');
		}

		if(w_top + 630 >= $('.fore').offset().top){
			$('.fore').addClass('animated slideInUp');
		}

		if(w_top + 630 >= $('.five').offset().top){
			$('.five').addClass('animated slideInUp');
		}

		if(w_top + 630 >= $('.six').offset().top){
			$('.six').addClass('animated slideInUp');
		}

		if(w_top + 630 >= $('.seven').offset().top){
			$('.seven').addClass('animated slideInUp');
		}

		if(w_top + 630 >= $('.eight').offset().top){
			$('.eight').addClass('animated slideInUp');
		}

		if(w_top + 630 >= $('.clientsTestimonials').offset().top){
			$('.clientsTestimonials').addClass('animated zoomIn').css('opacity', 1);
		}

		if(w_top + 630 >= $('.contactUsForm').offset().top){
			$('.contactUsForm').addClass('animated zoomIn').css('opacity', 1);
		}
		if(w_top + 630 >= $('.name').offset().top){
			$('.name').addClass('animated fadeInLeft').css('opacity', 1);
		}

		if(w_top + 630 >= $('.email').offset().top){
			$('.email').addClass('animated fadeInRight').css('opacity', 1);
		}

		if(w_top + 630 >= $('.massage').offset().top){
			$('.massage').addClass('animated zoomIn').css('opacity', 1);
		}

		if(w_top + 840 >= $('.submitBtn').offset().top){
			$('.submitBtn').addClass('animated zoomIn').css('opacity', 1);
		}

		if($(this).scrollTop() > 800) {
			$('.up').fadeIn(1000).addClass('animated bounceIn').removeClass('animated bounceOut');
		}

		else{
			$('.up').fadeOut(1000).removeClass('animated bounceIn').addClass('animated bounceOut');
		}
	});
	


	$('.btn').click(function(){
		$(this).toggleClass('btnActive');
		$('.top-nav-menu').slideToggle(400, function(){
			if($(this).css('display')==='none'){
				$(this).removeAttr('style');
			}
		});
	});

	
		
			$('.arrow').click(function(){
	  		$('html,body').stop().animate({ scrollTop: $('.ourTeam').offset().top }, 700);
			
	});

		
			$('.about').click(function(e){
				e.preventDefault();
	  		$('html,body').stop().animate({ scrollTop: $('.aboutUs').offset().top }, 700);
			
	});

		
			$('.service').click(function(e){
				e.preventDefault();
	  		$('html,body').stop().animate({ scrollTop: $('.ourServices').offset().top }, 700);
			
	});
		
			$('.portfolio').click(function(e){
				e.preventDefault();
	  		$('html,body').stop().animate({ scrollTop: $('.Work').offset().top }, 700);
			
	});
		
			$('.testimon').click(function(e){
				e.preventDefault();
	  		$('html,body').stop().animate({ scrollTop: $('.clientsTestimonials').offset().top }, 700);
			
	});
		
			$('.about').click(function(e){
				e.preventDefault();
	  		$('html,body').stop().animate({ scrollTop: $('.aboutUs').offset().top }, 700);
			
	});
		
			$('.contact').click(function(e){
				e.preventDefault();
	  		$('html,body').stop().animate({ scrollTop: $('.contactUsForm').offset().top }, 700);
			
	});
		
			$('.home').click(function(e){
				e.preventDefault();
	  		$('html,body').stop().animate({ scrollTop: 0 }, 700);
			
	});

			$('.arrow-up').on('click', function(e) {
				e.preventDefault();
			$('html, body').stop().animate({ scrollTop: 0 }, 700);
	});

		setInterval(function() {
			$('.arrow-up').toggleClass('animated bounce');
		}, 4000);

		setInterval(function() {
			$('.btn').toggleClass('animated tada');
		}, 2000);
});
