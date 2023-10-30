// JavaScript Document


		

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
            $("#toTop").click(function(){
                $("body").animate({ scrollTop: 0 }, 200);
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
    
    
    
    // FAQ 슬라이드 토글
     
    
    
});






// 메인 슬라이더 스크립트


	$(function() {
	var index = 0;
	var viewindex = 1;
	var indexlast = $(".carousel .carousel_inner li:last-child").index();
	var elementremove = 0;
	var booleans = true;
 
	$(".carousel .carousel_inner li").css({"display":"none"});
	$(".carousel .carousel_inner li").eq(index).css({"display":"block"});
	var imgsizeheight = $(".carousel .carousel_inner li").eq(index).height();
	$(".carousel").height(imgsizeheight);
	$( window ).resize(function() {
	  var imgsizeheight = $(".carousel .carousel_inner li").eq(index).height();
	   $(".carousel").height(imgsizeheight);
	});
 
	start();
 
	function start() {
		slideInterval = setInterval(function() {
			viewindex = viewindex + 1;
			Slide(index, index+1);
		}, 9000);
	}
	
	function Slide(arg, arg2, arg3) {
		if(booleans!= false) {
		booleans = false;
		imgsize = $(".carousel .carousel_inner li").eq(index).find("img").width();
		//imgsizeheight = $(".carousel .carousel_inner li").eq(index).find("img").height();
		imgsizeheight = $(".carousel .carousel_inner li").eq(index).height();

		$(".carousel").height(imgsizeheight);
		//imgmultiply = imgsizeheight * (index+1);

		if(arg == arg2) {
			booleans = true
			return;
		}
    if(arg3 != 'clickevent2') {
      if(viewindex == indexlast+2) {
        viewindex = 1;
      }
      $(".carousel_button").removeClass("active-carousel");
      $(".carousel-"+viewindex).addClass("active-carousel");
    }
		// 왼쪽
		if(arg < arg2) {
			if(arg2 == 0) {
				arg = indexlast;
				$(".carousel .carousel_inner li").eq(arg2).css({
					"display":"block",
					"top":0,
					"left":imgsize
				});

				$(".carousel .carousel_inner li").eq(arg).css({
					"display":"block",
					"top":-imgsizeheight,
					"left":0
				});
			} else {
				$(".carousel .carousel_inner li").eq(arg2).css({
					"display":"block",
					"top":-imgsizeheight,
					"left":imgsize
				});
			}
      if(arg3 != 'clickevent2') {
         
        if(arg2 == indexlast+1) {
          index = -1;
          booleans = true;
          Slide(index, index+1);
          clearInterval(slideInterval);
          slideInterval = setInterval(function() {
            viewindex = viewindex + 1;
            Slide(index, index+1);
          }, 9000);
          return;
        }
      }
			$(".carousel .carousel_inner li").eq(arg).animate({
				"left":-imgsize
			});
			$(".carousel .carousel_inner li").eq(arg2).animate({
				"left":0
			},function() {
				$(".carousel .carousel_inner li").eq(arg2).css({"top":"0"});
				$(".carousel .carousel_inner li").eq(arg).css({"display":"none"});
				if(arg3 == 'clickevent') {
					booleans = true;
					index = arg2;
					return;
				} else if(arg3 == 'clickevent2'){
          booleans = true;
          if(viewindex == indexlast+1) {
            viewindex = 1;
          } else {
            viewindex = viewindex + 1;
          }
					index = index + 1;
          $(".carousel_button").removeClass("active-carousel");
          $(".carousel-"+viewindex).addClass("active-carousel");
        } else {
					index = index + 1;
					booleans = true;
				}
			});
		// 오른쪽
		} else if(arg > arg2) {
			if(arg2 == -1) {
				arg2 = indexlast;
				arg = 0;
        index = indexlast+1;
				$(".carousel .carousel_inner li").eq(arg2).css({
					"display":"block",
					"top":-imgsizeheight,
					"left":-imgsize
				});

				$(".carousel .carousel_inner li").eq(arg).css({
					"display":"block",
					"top":0,
					"left":0
				});
			} else {
				$(".carousel .carousel_inner li").eq(arg).css({
					"display":"block",
					"top":-imgsizeheight,
					"left":0
				});
				$(".carousel .carousel_inner li").eq(arg2).css({
					"display":"block",
					"top":0,
					"left":-imgsize
				});
			}

      if(arg3 != 'clickevent' || arg3 != 'clickevent2') {
      } else {
         if(arg2 == 0) {
          booleans = true;
          Slide(indexlast, index-1);
          clearInterval(slideInterval);
          slideInterval = setInterval(function() {
            viewindex = viewindex + 1;
            Slide(index, index-1);
          }, 9000);
          return;
        }
      }
			$(".carousel .carousel_inner li").eq(arg).animate({
				"left":imgsize
			});
			$(".carousel .carousel_inner li").eq(arg2).animate({
				"left":0
			},function() {
				$(".carousel .carousel_inner li").eq(arg2).css({"top":"0"});
				$(".carousel .carousel_inner li").eq(arg).css({"display":"none"});
				if(arg3 == 'clickevent') {
					booleans = true;
					index = arg2;
					return;
				} else if(arg3 == 'clickevent2'){
          if(viewindex == 1) {
            viewindex = indexlast+1;
          } else {
            viewindex = viewindex - 1;
          }
					booleans = true;
					index = index - 1;
          $(".carousel_button").removeClass("active-carousel");
          $(".carousel-"+viewindex).addClass("active-carousel");
        } else {
					booleans = true;
					index = index - 1;
				}
			});
		} 
 
/*		
		if(index == indexlast+1) {
			index = 0;
			$(".carousel .carousel_inner").animate({
				"left": 0
			});
		} else {
			$(".carousel .carousel_inner").animate({
				"left": "-"+imgright
			});
		}
*/
  	$(".carousel").height(imgsizeheight);

		if(index == '-2') {
			index = indexlast;
		}
		}
	}
	$(".carousel_index").click(function(e) {
		e.preventDefault();
		clearInterval(slideInterval);
		viewindex = $(this).index() + 1;
		indexs = $(this).index();
		Slide(index, indexs, 'clickevent');
    start();
		/*
		var inx = $(this).index() + 1;
		var carousel_find = $(this).find(".carousel_button");
		$.each($(carousel_find), function(i, l) {
			console.log(l);
			$(".carousel_button").removeClass("active-carousel");
		});
		*/
		
	});
	$(".carousel_left").click(function(e) {
		e.preventDefault();

		if(index == 0) {
			Slide(indexlast, index-1, 'clickevent2');
			clearInterval(slideInterval);
			slideInterval = setInterval(function() {
				viewindex = viewindex + 1;
				Slide(index, index-1);
			}, 9000);
			return;
		} else {
  		Slide(index, index-1, 'clickevent2');
      clearInterval(slideInterval);
      slideInterval = setInterval(function() {
        viewindex = viewindex + 1;
        Slide(index, index-1);
      }, 9000);
    }
	});
	$(".carousel_right").click(function(e) {
 		e.preventDefault();
		if(index == indexlast) {
			index = -1;
			Slide(index, index+1, 'clickevent2');
			clearInterval(slideInterval);
			slideInterval = setInterval(function() {
				viewindex = viewindex + 1;
				Slide(index, index+1);
			}, 9000);
			return;
		} else {
    	Slide(index, index+1, 'clickevent2');
      clearInterval(slideInterval);
      slideInterval = setInterval(function() {
        viewindex = viewindex + 1;
        Slide(index, index+1);
      }, 9000);
    }
			
	});
});





