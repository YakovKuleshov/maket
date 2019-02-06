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

		$('h2').each(function() {
			if(w_top + 630 >= $(this).offset().top) {
			$(this).addClass('animated zoomIn').css('opacity', 1);
		}
	});
		$('.desAppPhotoMark').each(function() {
			if(w_top + 630 >= $(this).offset().top){
			$(this).addClass('animated bounceIn').css('opacity', 1);
		}
	});			

		$('.itemBoxes').each(function() {
			if(w_top + 630 >= $(this).offset().top){
			$(this).addClass('animated slideInUp');
		}
	})
				
				
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
			
			$('.items').each(function() {
				$(this).on('click', function(e){
					e.preventDefault();
				var index = $(this).index('.items');
				$('html, body').stop().animate({scrollTop: $('.page').eq(index).offset().top}, 700);
			});
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
