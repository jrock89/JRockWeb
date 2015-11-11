$(document).ready(function(){
	'use strict';

    $(window).load(function(){
        $(".loader").fadeOut("slow");
    });


	//background image
	$.backstretch('images/togalakefade3.png');

	// waypoint for fixed nav
	$('#onePointFivePage').waypoint(function() {
		$('#fixNav').toggle(700);
		$('body').removeClass('bMargin');
		$('#totalBox').toggle();
		$('#shrinkLogo').toggleClass('shrinkLogo');
	});
	$('#onePointFivePage').waypoint(function() {
		$('#upArrow').toggle(200);
	});
	$('#onePointFivePage').waypoint(function() {
		// $('#fixNavDrop').hide(200);
	});



	$('#onePointFivePage').waypoint(function(){
		$('#explore').fadeToggle();
		// $('#introInfo').fadeToggle(1000);
		$('.socialHead').fadeToggle(100);
		$('#introInfo').toggleClass('introAnimate');
		$('#explore').toggleClass('exploreAnimate');
		}, {
		offset: '100%'
	});


	$('#secondPage').waypoint(function(){
		$('#introInfo').fadeToggle(10);
		// $('#explore').fadeToggle(200);
	});





	//scroll away go back to works original page
	$('#thirdPage').waypoint(function() {
		$('.workingJRV').hide();
		$('.workingJRW').hide();
	    $('.workingNLS').hide();
	    $('.workingPD').hide();
	    $('.working').show();
	}, {
		offset: '100%'
	});

	// $('#secondPage').waypoint(function(){
	// 	$('#introInfo').fadeToggle(500);
	// 	$('#introBackground').fadeToggle(500);
	// 	$('header').fadeToggle(900);




	// }, {
	// 	offset: '100%'
	// });


// ************IMPORTANT*************************)

	$('#onePointFivePage').waypoint(function(){
		$('#headerContainer').toggleClass("newHead");
		$('#totalBox').toggleClass("logoBox");
        $('#fixedMenu').hide(200);

	});


	$("#nav-toggle").on('click', function(){
		$('#fixedMenu').slideToggle(200);
		$('#nav-toggle-box').toggleClass('nav-toggle-box');

	});

	$("#fixedMenu a li").on('click', function(){
		$('#fixedMenu').slideToggle(200);
		$('#bunOne').toggleClass("active");
  		$('#bunTwo').toggleClass("active");
  		$('#burger').toggleClass("active");
  		$('#nav-toggle-box').toggleClass('nav-toggle-box');
	});



	document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  		this.classList.toggle( "active" );
  		$('#bunOne').toggleClass("active");
  		$('#bunTwo').toggleClass("active");
  		$('#burger').toggleClass("active");
	});



	// $('#thirdPage').waypoint(function(){
		// $('.design').toggleClass("infoBoxInline");
		// $('#design').slideToggle(900);
		// $('.development').toggleClass("infoBoxInline");
		// $('#development').delay(500).slideToggle(900);
		// $('.branding').toggleClass("infoBoxInline");
		// $('#branding').delay(500).slideToggle(900);

	// 	$('#info').slideToggle(900);

	// }, {
	// 	offset: '100%'
	// });



	// $('.continueReading').waypoint(function(){
		// $('.design').toggleClass("infoBoxInline");
		// $('#design').slideToggle(900);
		// $('.development').toggleClass("infoBoxInline");
		// $('#development').delay(500).slideToggle(900);
		// $('.branding').toggleClass("infoBoxInline");
		// $('#branding').delay(500).slideToggle(900);

	// 	$('.me').fadeToggle(1100);

	// }, {
	// 	offset: '100%'
	// });


	$('.me').waypoint(function(){
		$('.onePointFivePage h1').fadeToggle(3000);

	}, {
		offset: '100%'
	});


	$('body').waypoint(function(){
		$('#firstPage img').show(3000);


	});

	$('#twoPointFivePage').waypoint(function(){
		$('.continueReading').show();

	}, {
		offset: '100%'
	});





	// continue reading button
	$('.continueReading a').on('click', function(){
		$('.moreMe').slideToggle(2000);
	});
	$('.closeBox').on('click', function(){
		$('.moreMe').slideToggle(1000);
	});



	//hide/show social drop box
	$('#stickySocial').on('click', function(){
		$('#socialDrop').show();
	});
	$('#stickyHome').on('click', function(){
		$('#socialDrop').hide();
	});
	$('#stickyOne').on('click', function(){
		$('#socialDrop').hide();
	});
	$('#stickyTwo').on('click', function(){
		$('#socialDrop').hide();
	});
	$('#stickyThree').on('click', function(){
		$('#socialDrop').hide();
	});





	 // fix nav drop menu / hamburger icon
	$('#hamburger').on('click', function(){
		$('#fixNavDrop').fadeToggle();
		// $('#fixNavDrop').next().animate({width: 'toggle'})
		// $('#fixNav').slideToggle();
		// $('#hamburger').css('color', '#fff');
		$('#hamburger').toggleClass('hamColor');
		// $('body').toggleClass('bMargin');

	});
	$('#goTop').on('click', function(){
		$('#fixNavDrop').hide(200);
		$('#hamburger').toggleClass('hamColor');
	});
	$('#stickyOne').on('click', function(){
		$('#fixNavDrop').hide(200);
		$('#hamburger').toggleClass('hamColor');
	});
	$('#stickyTwo').on('click', function(){
		$('#fixNavDrop').hide(200);
		$('#hamburger').toggleClass('hamColor');
	});
	$('#stickyThree').on('click', function(){
		$('#fixNavDrop').hide(200);
		$('#hamburger').toggleClass('hamColor');

	});
	$('#closeNav').on('click', function(){
		$('#fixNavDrop').fadeToggle();
		// $('#fixNav').slideToggle();
		// $('body').toggleClass('bMargin');
		$('#hamburger').toggleClass('hamColor');
	});



	// smooth scrolling on nav clicks
	$('#firstPage header nav ul a').click(function(){
		var tabsId = $(this).attr('href');
		$('body, html').animate({scrollTop: $(tabsId).offset().top}, 'slow');
		return false;
	});
	$('body a').click(function(){
		var tabsId = $(this).attr('href');
		$('body, html').animate({scrollTop: $(tabsId).offset().top}, 'slow');
		return false;
	});








});
