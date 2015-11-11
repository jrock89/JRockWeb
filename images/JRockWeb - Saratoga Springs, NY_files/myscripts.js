// JQuery functions/scripts

	
	// check that the page is ready
$(document).ready(function(){ 


		// animate info blocks
	 $(".disign").hover(function () {
		    $('.disignp').show(200);
		}, 
		function () {
		    $('.disignp').hide(200);
		});

	 $(".development").hover(function () {
		    $('.developmentp').show(200);
		}, 
		function () {
		    $('.developmentp').hide(200);
		});

	 $(".branding").hover(function () {
		    $('.brandingp').show(200);
		}, 
		function () {
		    $('.brandingp').hide(200);
		});


	 // waypoints for animated page titles
	 // $('.secondPageBox').waypoint(function() {
		//   $('.tabAbout').delay(500).show(200);
		//   }, {
		// 		offset: '100%'
	 //  });
	 //  $('.thirdPageBox').waypoint(function() {
		//   $('.tabAbout').delay(500).show(200);
		//   }, {
		// 		offset: '100%'
	 //  });
	 //   $('.forthPageBox').waypoint(function() {
		//   $('.tabAbout').delay(500).show(200);
		//   }, {
		// 		offset: '100%'
	 //  });


	   // waypoint for fixed nav 
	    $('#onePointFivePage').waypoint(function() {
		  $('#fixNav').toggle(700);
	  });
	    $('#onePointFivePage').waypoint(function() {
		  $('#upArrow').toggle(200);
	  });

	    $('#onePointFivePage').waypoint(function() {
		  $('#fixNavDrop').hide(200);
	  });


	  //waypoint skill arrow
	  // $('#twoPointFivePage').waypoint(function() {

		  
		 //  $('.skillToggle').slideToggle(200);
		 //  }, {
			// 	offset: '100%'
	  // });


	    // continue reading button
	 $('.continueReading img').on('click', function(){
	 	$('.moreMe').slideToggle(2000);
	 });

	 $('.closeBox').on('click', function(){
	 	$('.moreMe').slideToggle(1000);
	 });





	 // fix nav drop menu / hamburger icon
	 $('.hamburger').on('click', function(){
	 	$('#fixNavDrop').slideToggle();

	 });
	 $('.closeAbout').on('click', function(){
	 	$('#fixNavDrop').hide(200);
	 });
	 $('.closeWork').on('click', function(){
	 	$('#fixNavDrop').hide(200);
	 });
	 $('.closeContact').on('click', function(){
	 	$('#fixNavDrop').hide(200);
	 });


	 //work page
	 $('#workBoxOne').on('click', function(){
	 	$('.working').hide();
	 	$('.workingJRV').show();


	 });
	 $('#workBoxTwo').on('click', function(){
	 	$('.working').hide();
	 	$('.workingNLS').show();


	 });
	 $('#workBoxThree').on('click', function(){
	 	$('.working').hide();
	 	$('.workingJRW').show();


	 });
	 $('#workBoxFour').on('click', function(){
	 	$('.working').hide();
	 	$('.workingPD').show();


	 });


	 $('.workingJRV i').on('click', function(){
	 	$('.workingJRV').hide();
	 	$('.working').show();
	 	
	 });
	 $('.workingNLS i').on('click', function(){
	 	$('.workingNLS').hide();
	 	$('.working').show();
	 	
	 });
	 $('.workingJRW i').on('click', function(){
	 	$('.workingJRW').hide();
	 	$('.working').show();
	 	
	 });
	 $('.workingPD i').on('click', function(){
	 	$('.workingPD').hide();
	 	$('.working').show();
	 	
	 });


	 // work tabs
	 $('#tabOneButton').on('click', function(){
	 	$('#tab1').show();
	 	$('#tab2').hide();
	 	$('#tab3').hide();
	 	$('#tabOneButton a').css({background: '#FFF'});
	 	$('#tabTwoButton a').css({background: '#7FB5DA'});
	 	$('#tabThreeButton a').css({background: '#7FB5DA'});
	 	$('.jrockvisionPage').hide();
	 });
	 $('#tabTwoButton').on('click', function(){
	 	$('#tab2').show();
	 	$('#tab1').hide();
	 	$('#tab3').hide();
	 	$('#tabTwoButton a').css({background: '#FFF'});
	 	$('#tabOneButton a').css({background: '#7FB5DA'});
	 	$('#tabThreeButton a').css({background: '#7FB5DA'});
	 	$('.jrockvisionPage').hide();
	 });
	 $('#tabThreeButton').on('click', function(){
	 	$('#tab3').show();
	 	$('#tab1').hide();
	 	$('#tab2').hide();
	 	$('#tabThreeButton a').css({background: '#FFF'});
	 	$('#tabOneButton a').css({background: '#7FB5DA'});
	 	$('#tabTwoButton a').css({background: '#7FB5DA'});
	 	$('.jrockvisionPage').hide();
	 });

	// smooth scrolling on nav clicks
	$("#firstPage header nav ul a").click(function(){
		var tabsId = $(this).attr("href");
		$("body").animate({scrollTop: $(tabsId).offset().top}, "slow");
		return false;
	});


	$("body a").click(function(){
		var tabsId = $(this).attr("href");
		$("body").animate({scrollTop: $(tabsId).offset().top}, "slow");
		return false;
	});


				
			});	