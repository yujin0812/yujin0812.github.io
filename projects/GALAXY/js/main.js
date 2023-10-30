// JavaScript Document

$(document).ready(function(e) {
	
	var old_sn = 0;
	var new_sn = 0;
     
	$(".mainslider-next").click(function(){
		
		$(".main-slide").eq(old_sn).removeClass("main-slide-on");
		new_sn++;
		$(".main-slide").eq(new_sn).addClass("main-slide-on");
		old_sn = new_sn;
		
		if (new_sn == $(".main-slide").length - 1) {
                new_sn = -1;
        }
		
	});
	
	
	$(".mainslider-prev").click(function(){
		
		$(".main-slide").eq(old_sn).removeClass("main-slide-on");
		new_sn--;
		$(".main-slide").eq(new_sn).addClass("main-slide-on");
		old_sn = new_sn;
		
		if (new_sn == 0 ) {
                new_sn = $(".main-slide").length;
        }
			
	});

     
     
		$(".minheader-ham").click(function(e) {
			$(".drawer").addClass("drawer-on");
		});
		 
		$(".btn-x").click(function(e) {
			$(".drawer").removeClass("drawer-on");
		});

	
	$(".login-btn").click(function(e) {
			alert("등록되지 않은 회원입니다.");
		});
	
	
	 $(".guide-tab").click(function(e){
		
		$(".guidetab-sel").removeClass("guidetab-sel");
		$(this).addClass("guidetab-sel");
		
		$(".guide-tview-sel").removeClass("guide-tview-sel");
		$(".guide-tview").eq( $(this).index() ).addClass("guide-tview-sel");
		
	});
	
	 $(window).scroll(function(){
		
		var scrolled=$(window).scrollTop();
		
		if( scrolled>700) {
		$(".service-nav").addClass("service-nav-on");
			$(".nav-tab1").addClass("nav-tab1-on");
			$(".nav-tab2").addClass("nav-tab1-on");
			$(".nav-tab3").addClass("nav-tab1-on");
			$(".nav-tab4").addClass("nav-tab1-on");
			$(".nav-tab5").addClass("nav-tab1-on");
		} else {
			$(".service-nav").removeClass("service-nav-on");
			$(".nav-tab1").removeClass("nav-tab1-on");
			$(".nav-tab2").removeClass("nav-tab1-on");
			$(".nav-tab3").removeClass("nav-tab1-on");
			$(".nav-tab4").removeClass("nav-tab1-on");
			$(".nav-tab5").removeClass("nav-tab1-on");
		}
			
	 });
	 
});
