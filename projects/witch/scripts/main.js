// JavaScript Document

$(document).ready(function(){
	
	
	$(".main").mousemove(function(e) {
         
        $(".main-left").css("margin-left", -800 + ( e.clientY - $(window).height() /2 ) * -0.2 );
        $(".main-right").css("margin-left", -820 + ( e.clientX - $(window).width() /2 ) * -0.04 );
        $(".main-img").css("margin-left", -830 + ( e.clientX - $(window).width() /2 ) * -0.03 );
		$(".main-tree").css("margin-left", -830 + ( e.clientX - $(window).width() /2 ) * -0.02 );
		
	});
		
		
	$(".section4").mousemove(function(e) {
		
		$(".last-right").css("margin-left", 470 + ( e.clientX - $(window).width() /2 ) * -0.05 );
        $(".last-left").css("margin-left", -680 + ( e.clientX - $(window).width() /2 ) * -0.07 );
    
	});
	

	$(".section-img").mouseenter(function(){
		$(".section1-text div").css("display", "none");
		$(".section1-text div").eq( $(this).index() ).css("display", "block");
	});
	$(".section-img").mouseleave(function(){
		$(".section1-text div").css("display", "none");
	});
		
	$(".spider").mouseenter(function(){
        var sp = $(this).addClass("spider-sel");		
		setTimeout( function(){
			sp.removeClass("spider-sel");	
		}, 1000);
	});
	
	$(window).scroll(function(e) {
         
        var scrolled = $(window).scrollTop();
        
		$(".spider").removeClass("spider-on");	
				
		$(".spider").eq( parseInt(( scrolled-400)/1000) ).addClass("spider-on");
		
	});
	
	
	$(".popup").click(function(){
		
		$(".popup-wrap").addClass("popup-wrap-on");
		
		$(".window").css("display", "none");
		$(".window").eq( $(this).index() ).css("display", "block");
		
		$(".popup-button").click(function(){
			$(".window").css("display", "none");
			$(".popup-wrap").removeClass("popup-wrap-on");	
		});
		
	});
		
});