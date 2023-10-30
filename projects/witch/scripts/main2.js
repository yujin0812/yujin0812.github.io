$(document).ready(function(){
	
	$(".pf").click(function(){
		
		$(".popup-wrap").addClass("popup-wrap-on");
		
		$(".window").css("display", "none");
		$(".window").eq( $(this).index() ).css("display", "block");
		
		$(".window").click(function(){
			$(".window").css("display", "none");
			$(".popup-wrap").removeClass("popup-wrap-on");	
		});
		
	});	
	
});