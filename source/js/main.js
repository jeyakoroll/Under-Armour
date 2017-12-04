$(document).ready(function(){
	var woman = $('.gallery__woman-show'),
			man = $('.gallery__man-show');

	// about gallery
	woman.owlCarousel({
    responsiveClass:true,
    responsive:{
        0:{
				    loop:true,
				    margin: 250,
				    items: 1,
				    center: true,
				    dots: true,
				    nav: false,
				    autoWidth: true,
				    dotsContainer: '.gallery__woman-dots_mob'
        },
        480:{
        		loop:true,
				    margin: 250,
				    items: 1,
				    center: true,
				    dots: true,
				    nav: false,
				    autoWidth: true,
						dotsContainer: '.gallery__woman-dots'
        },
        992:{
            loop:true,
				    margin: 120,
				    items: 1,
				    center: true,
				    dots: true,
				    nav: false,
				    autoWidth: true,
				    dotsContainer: '.gallery__woman-dots'
        }
    }
  });

  // about gallery
	man.owlCarousel({
    responsiveClass:true,
    responsive:{
        0:{
				    loop:true,
				    margin: 250,
				    items: 1,
				    center: true,
				    dots: true,
				    nav: false,
				    autoWidth: true,
				    dotsContainer: '.gallery__man-dots_mob'
        },
        480:{
        		loop:true,
				    margin: 250,
				    items: 1,
				    center: true,
				    dots: true,
				    nav: false,
				    autoWidth: true,
						dotsContainer: '.gallery__man-dots'
        },
        992:{
            loop:true,
				    margin: 120,
				    items: 1,
				    center: true,
				    dots: true,
				    nav: false,
				    autoWidth: true,
				    dotsContainer: '.gallery__man-dots'
        }
    }
  });

	// style for form
    $( '.gallery__man-form .order-form' ).addClass( 'footer__form-order' );
    $( '.gallery__man-form input' ).addClass( 'footer__form-data' );
    $( '.gallery__man-form button' ).addClass( 'footer__form-button' );
    $('.gallery__man-form input[name=name_first]').attr("placeholder","Имя");
    $('.gallery__man-form input[name=name_last]').attr("placeholder","Телефон");

  // select a unique checkbox
     var checkbox = $('.check__size');

      checkbox.on('click', function() {
        var 
            that = $(this),
            thatData = that.data('check'),
						thatClass = that.hasClass(thatData);

        for (var i = 0; i < checkbox.length; i++) {
          if ( thatClass ) {
            that.addClass('checkbox-back');
            that.siblings().removeClass('checkbox-back');
          } 
        }

      });

 	// // popup
	// //open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
   });

	// popup politics
	// open popup
	$('.politics').on('click', function(event){
		event.preventDefault();
		$('.cd-politics').addClass('is-visible');
	});
	
	// close popup
	$('.cd-politics').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-politics') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	// close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-politics').removeClass('is-visible');
	    }
   });


	// show form
  $('.footer__button').on('click', showForm);

  function showForm (e) {
      e.preventDefault();
      toForm($(this).data('form'), true);
  }

  function toForm(section, isAnimate) {
      var 
          reqSection = $('.gallery__title').filter('[data-section="' + section +'"]'),
          reqSectionPos = reqSection.offset().top;

      if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 350);
      }
  }


}); 	