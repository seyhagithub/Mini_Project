
$(function(){
	/* ============== Animation Navbar =========*/
	$('.dropdown').mouseover(function(){
		$(this).addClass('open animated fadeIn');
	});
	$('.dropdown').mouseleave(function(){
		$(this).removeClass('open animated fadeIn');
	});
	
	var nav = $('.navbar-inverse');
	$(window).scroll(function(){

		var scroll = $(window).scrollTop();
		if(scroll >=300){
			// nav.addClass('animated fadeIn navbar-fixed-top');
			$('.navbar-ab').css("position", 'fixed');
			$(".navbar-inverse").css("background", "rgba(38, 38, 38, 1)");
			$(".navbar-nav > li > a ").css({
				"padding-top": "30px",
				"padding-bottom": "30px"
			});
			$(".navbar-brand").css("padding", "30px 15px");
		
		}else{
			
			$('.navbar-ab').css("position", 'absolute');
			$(".navbar-inverse").css("background", "rgba(38, 38, 38, 0.47)");
			$(".navbar-nav > li > a ").css({
				"padding-top" : "50px",
				"padding-bottom" : "50px"
			});
			$(".navbar-brand").css("padding", "50px 15px");

		}
	});
	/* ============== Animation ThreeFeather And Goto Top page=========*/
	$('.threeFeather').waypoint(function(direction) {
		 if (direction === 'down') {
       		$('.gotoTop').removeClass('fadeOut');
		 	$('.img-box img').addClass('animated slideInLeft');
      	 	$('.desThF').addClass('animated fadeIn');
      	 	$('.gotoTop').css("display", "block").addClass('animated fadeIn');
		 }
		 else{
		 
       		$('.gotoTop').removeClass('fadeIn').addClass('fadeOut');
       		
		 }
       
    },{
    	offset: '70%'
    });
    setInterval(function(){
		$('.img-box img').removeClass('animated slideInLeft').css('visibility', 'visible');
   		
    },4500);

	 //  =========  animate scrolling ===========
	smoothScroll.init({
		speed: 700,
		easing: "easeInOutQuint",
		updateURL: false,
		offset: 150
	});
	 //  ========= Carousel Slide 1 ===========
	 $('#slider1').tinycarousel();
	//  ========= Carousel Slide 1 ===========
	$('#slider1 .imgfirst img').on('mouseover', function(){
		$('.descc1').slideDown().on('mouseleave', function(){
			$(this).slideUp();
		});
	});
	$('#slider1 .imgsecond img').on('mouseover', function(){
		$('.descc2').slideDown().on('mouseleave', function(){
			$(this).slideUp();
		});
	});
	$('#slider1 .imgthird img').on('mouseover', function(){
		$('.descc3').slideDown().on('mouseleave', function(){
			$(this).slideUp();
		});
	});
	$('#slider1 .imgfourth img').on('mouseover', function(){
		$('.descc4').slideDown().on('mouseleave', function(){
			$(this).slideUp();
		});
	});
	
	$('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $("#slide-nav").on("click", toggler, function (e) {

        var selected = $(this).hasClass('slide-active');

        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });

        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });

        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });


        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');


        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');


    });


    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';


    $(window).on("resize", function () {

        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }


    });




});