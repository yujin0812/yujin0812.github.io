// JavaScript Document
       var arrimg = new Array();
        arrimg[0] = "main_1.jpg";
        arrimg[1] = "main_2.jpg";
        arrimg[2] = "main_3.jpg";
        arrimg[3] = "main_4.jpg";
        arrimg[4] = "main_5.jpg";

        function changeimg() {
        var arrNum = Math.floor(Math.random() * (arrimg.length));
            
        $(".mainarr").attr("src","images/" + arrimg[arrNum]);

        }


	$(document).ready(function(){
        
		$(".minheader-ham").click(function	(){
			$(".drawer").addClass("drawer-on");
            $(".drawer-popup").addClass("popup-on");
		});
        
		$(".drawer-xbtn").click(function(){
			$(".drawer").removeClass("drawer-on");
            $(".drawer-popup").removeClass("popup-on");
		});
        // drawer
        
        $(".category-title").click(function	(){
			$(".category-title").removeClass("category-title-sel");
            $(this).addClass("category-title-sel");
		});
        // 카테고리 타이틀
    
        $(".num-wrap li").click(function (){
			$(".num-wrap li").removeClass("num-sel");
            $(this).addClass("num-sel");
		});
        // 페이지
        

        $(".category-bg").click(function (){
			$(".category-bg").removeClass("category-sel");
            $(this).addClass("category-sel");
		});
        // 카테고리 백그라운드

	});


$(document).ready(function(e) {
	
    $(".gray-button").click(function(){
		
        $(".gray-button-sel").removeClass("gray-button-sel");
		$(this).addClass("gray-button-sel");
        
		$(".gray-sel").removeClass("gray-sel");
		$(".gray").eq($(this).index()).addClass("gray-sel");
		
	});

});





	

	$(document).ready(function(){
		$(".minheader-ham").click(function	(){
			$(".drawer").addClass("drawer-on");
            $(".drawer-popup").addClass("popup-on");
		});
		
		$(".drawer-xbtn").click(function(){
			$(".drawer").removeClass("drawer-on");
            $(".drawer-popup").removeClass("popup-on");
		});
        
        
        $('.faq-exp').click(function(){
            $(this).next().slideToggle('fast')
            return false;
        });
        
        
        $('body').append('<div id="toTop"><i class="fa fa-angle-double-up fa-5x"></i></div>'); 
            $("#toTop").bind("click", function () {$("body").animate({ scrollTop: 0 }, 200);}); 
                $(window).scroll(function () { 
                if ($(this).scrollTop() != 0) { 
                $('#toTop').fadeIn(); 
                } else { 
                $('#toTop').fadeOut(); 
            } 
	   }); 
        
	});




$(document).ready(function(e) {
    
    
    // 오토스크롤링
	$('a[href^="#"]').click(function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function () {
			window.location.hash = target;
		});
	});
    
    
    // 스크롤탑 카테고리 fixed
    $(window).scroll(function(){
		var scrolled=$(window).scrollTop();
		if( scrolled>348 ) {
			$(".fixed-category").addClass("category-fixed");
		} else {
            $(".fixed-category").removeClass("category-fixed");
        }
    });
    
    // 카테고리 셀
    $(".category li").click(function(){
        $(".category li").removeClass("category-sel");
        $(this).addClass("category-sel");
    });
    
    
});

