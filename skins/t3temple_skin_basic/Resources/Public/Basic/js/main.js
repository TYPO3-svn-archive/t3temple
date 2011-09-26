/*
 *
 *  Main Script for t3temple basic skin
 *  by Hans Christian Reinl
 *
 *  hans.chr.reinl@gmail.de
 *  @drublic
 *
 */


var searchFocus = false,
    scrollUpButton = false;




! function ($, window, document, undefined) {
  
$(document).ready( function () {
		
		
		
		
		/* Cufon */
		if (typeof(window.Cufon) == "function") {
		  Cufon.now();
			
			if ($('body').hasClass('dark')) {
			  $('h1').css({ fontSize: '250%' });
			  $('h2').css({ fontSize: '220%' });
		    $('h3').css({ fontSize: '150%' });
			  $('#nav').find('li a').css({ fontSize: '120%' });
			  $('#meta').find('li a').css({ fontSize: '120%' });
		    
		    Cufon.set('fontFamily', 'ColaborateLight');
  			Cufon.replace('h1', { hover: true });
  			Cufon.replace('h2', { hover: true });
  			Cufon.replace('h3', { hover: true });
  			Cufon.replace('#nav li a', { hover: true });
  			Cufon.replace('#meta li a', { hover: true });
		  }
		  else if ($('body').hasClass('leaguescript')) {
		    Cufon.set('fontFamily', 'League Script Thin');
  			Cufon.replace('h1', { hover: true });
  			Cufon.replace('h2', { hover: true });
  			
		    Cufon.set('fontFamily', 'ColaborateLight');
  			Cufon.replace('h3', { hover: true });
  			Cufon.replace('#nav li a', { hover: true });
      }
		  else if ($('body').hasClass('blackout')) {
		    Cufon.set('fontFamily', 'Blackout');
  			Cufon.replace('h1', { hover: true });
  			Cufon.replace('h2', { hover: true });
  			Cufon.replace('h3', { hover: true });
  			Cufon.replace('#nav li a', { hover: true });
  			
  			Cufon.set('fontFamily', 'Blackout 2AM');
  			Cufon.replace('#sidebar .box h3', { hover: true });
  			Cufon.replace('.read-more');
  			Cufon.replace('.older-posts a');
  			Cufon.replace('.newer-posts a');
      }
      else {
  			Cufon.replace('h1', { hover: true });
  			Cufon.replace('h2', { hover: true });
  			Cufon.replace('h3', { hover: true });
  			Cufon.replace('#nav li a', { hover: true });
  			Cufon.replace('#meta li a', { hover: true });
      }
		}
		
		
		
		
		
		/* The Menu - Meta and Main */
		if (typeof($.fn.superfish) == 'function')
  		$('#meta, #nav').superfish({ delay: 0 });
		
		
		
		
		
		
		/* Give Feedback when hovering the follow-icons */
		$(".follow li a").hover( function () {
				$(this).append('<div class="overlay"></div>');
				$(this).find(".overlay").css({ opacity: 0 }).animate({ opacity: 0.3 });
			},
			function () {
		    $(this).find(".overlay").stop(true, true).animate({ opacity: 0 }, function () { $(this).remove(); });
		  });



		/* Give Feedback when hovering the buttons */
		$('.read-more, .older-posts a, .newer-posts a').hover( function () {
				$(this).append('<div class="overlay"></div>');
				$(this).find(".overlay").css({ opacity: 0 }).animate({ opacity: 0.3 });
			}, function () { $(this).find(".overlay").stop(true, true).animate({ opacity: 0 }, function () { $(this).remove(); }); });

		$('input[type="submit"]').hover( function () {
				if (! $(this).parents().hasClass("search")) $(this).animate({ opacity: 0.7 });
				else $(this).animate({ opacity: 0.4 });
			}, function () {
				if (! $(this).parents().hasClass('search')) $(this).stop(true, true).animate({ opacity: 1 });
				else $(this).stop(true, true).animate({ opacity: 0 });
			});



		/* Search: stay active if clicked */
		$('.search input[type="text"]').click( function () {
				$(this).addClass("active");
				if ($(this).val() == "Search") $(this).val('');
				searchFocus = true;
			});
		
		$('.search input[type="text"]').blur( function () {
				$(this).removeClass('active');
				if ($(this).val() == '') $(this).val('Search');
				searchFocus = false;
			});
			



		/* Scroll to Top */
		$('#scrollUpButton').click( function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
		});
			
		/* Slider-Nav Position */
		$(".nivo-controlNav").css({ left: 350 - $(this).width() + "px" });
		
		/* Gallery and Images */
		if (!$.browser.msie) {
			var bg_src;
			$('#content').find('img').each( function () {
					bg_src = $(this).attr('src');
					$(this).css('visibility', 'hidden').wrap('<span class="image-wrap">');
					$(this).parents('.image-wrap').css("background", "url(" + bg_src + ") no-repeat 0 0");
				});
		}

    
    /* Hovering Gallery-Close Button */
    $(".gallery a").click( function () {
		$('#lightbox-secNav-btnClose').hover( function () {
		    $(this).append('<div class="overlay"></div>');
        $(this).find(".overlay").css({ opacity: 0 }).animate({ opacity: 0.3 });
			}, function () {
        $(this).find('.overlay').stop(true, true).animate({ opacity: 0 }, function () {
          $(this).remove();
        });
      });
    });


		/* Show alert for IE6-User */
		if ($.browser.msie && parseInt ($.browser.version) <= '6') {
			alert('Please update your browser immediately!');
		}



});
	






/* Scroll up Button */  
$(window).scroll( function () {
  
  // Show Button if you don't see the Navigation anymore
  if (scrollUpButton == false) {
    if ($(document).scrollTop() > 130) {
      $('#scrollUpButton').fadeIn('slow');
			scrollUpButton = true;
		}
  }
	
	// Hide button
	else {
    if ($(document).scrollTop() < 130) {
      $("#scrollUpButton").fadeOut("slow");
      scrollUpButton = false;
		}		        
  }

});






/* Slider */
if (typeof($.fn.nivoSlider) == 'function' && $('.slide').size() > 0) {
    $(window).load (function() {
    	$('.slide').nivoSlider({
    			effect: 'fade',
    			slices: 1,
    			caption: false,
    			animSpeed: 500,
    			pauseTime: 3000,
    			directionNav: true,
    			directionNavHide: false
    		});
    });
}





} (jQuery, window, document);


! function ($, window, document, undefined) {

/* Slider */
! function () {
  var selector = '.t3t-slider';
  
  if ( (typeof(window.$.fn.orbit) == 'function') && $(selector).size() != 0) {
    var img = new Array();
    
    $(selector).find('img').each( function (i) {
      img[i] = $(this).parent().html();
    });
      
    $(selector).html(img.join(''));
    
    $(window).load(function() {
      $(selector).orbit({
        animation: 'fade'
      });
    });
  }
} ();




/* Lightbox */
! function () {
  var selector = '.t3t-lightbox';

  if ( (typeof(window.$.fn.lightBox) == 'function') && $(selector).size() != 0) {
    $(selector).lightBox();
  }
} ();






} (jQuery, window, document);










