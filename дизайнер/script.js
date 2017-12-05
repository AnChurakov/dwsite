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