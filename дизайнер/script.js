$(document).ready(function(){

	$(function() {
		$(".owl-carousel").owlCarousel({
			nav: false,
			loop: true,
			responsiveClass: true,
			autoHeight: true,
			items: 1,
		});
	});
	//
	$("#btnSub").hide();
	$("#personalInfo").click(function(){
		if ($("#personalInfo").is(":checked")) {
			$("#btnSub").show();
		} else {
			$("#btnSub").hide();
		}
	});
	

	$(".customer").click(function() {
	
		$('html, body').animate({ scrollTop: $(".uslugi").offset().top }, 1100)
	
	});
	
	$(".selects").click(function() {
	
		$('html, body').animate({ scrollTop: $(".forms").offset().top }, 1100)
	
	});

	(function(){
		$(".burger-btn-src").click(function(){
			$(".menu").slideToggle("slow");
		});
		$(window).resize(function(){
			if ($(this).width() >= 1024) {
				$(".menu").show();
			}
		});
	}());
  
});