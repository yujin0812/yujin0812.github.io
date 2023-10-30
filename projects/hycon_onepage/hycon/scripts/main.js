// JavaScript Document

	$(document).ready(function(){
        
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
    
        // 기업연혁 슬라이드 토글
        $('.paradigm-exp').click(function(){
            $(this).next().slideToggle('fast');            
            if ($(this).hasClass('pexp-sel')) {
                $(this).removeClass('pexp-sel');
            }
            else {
                 $(this).addClass("pexp-sel");   
            }
            return false;
        });
        
        $(".gnb-list").click(function(){
            $(".gnb-list").removeClass("gnb-list-sel");
            $(this).addClass("gnb-list-sel");
		});
        // FAQ
        $(".faq-tab").click(function(){
            $(".faq-tab").removeClass("faq-tab-sel");
            $(this).addClass("faq-tab-sel");
            $(".faq-tview").removeClass("tview-sel");
            $(".faq-tview").eq($(this).index()).addClass("tview-sel");
        });
        // FAQ 슬라이드토글
        $('.faq-exp').click(function(){
            $(this).next().slideToggle('fast')
            return false;
        });
        // ROAD MAP
        $(".chart-tab").click(function(){
            $(".chart-tab").removeClass("chart-tab-sel");
            $(this).addClass("chart-tab-sel");
            $(".chart-tview").removeClass("tview-sel");
            $(".chart-tview").eq($(this).index()).addClass("tview-sel");
        });
        // ROAD MAP
        $(".chart-tab2").click(function(){
            $(".chart-tab2").removeClass("chart-tab-sel");
            $(this).addClass("chart-tab-sel");
            $(".chart-tview2").removeClass("tview-sel");
            $(".chart-tview2").eq($(this).index()).addClass("tview-sel");
        });
        
        // DRAWER
		$(".header-ham").click(function	(){
            if ($(".header-ham").hasClass('minheader-on')) {
                $(".header-ham").removeClass('minheader-on');
            }
            else {
                 $(".header-ham").addClass("minheader-on");
            }
		});
        $(".header-ham").click(function	(){
            if ($(".drawer").hasClass('drawer-on')) {
                $(".drawer").removeClass('drawer-on');
            }
            else {
                 $(".drawer").addClass("drawer-on");
            }
		});
        $(".gnb-a").click(function(){
            $(".gnb-a").removeClass("gnb-list-sel");
            $(this).addClass("gnb-list-sel");
        });
        
        // TOP버튼
            $("#toTop").click(function(){
                $("body").animate({ scrollTop: 0 }, 200);
            });
            $(window).scroll(function () { 
                if ($(this).scrollTop() != 0) { 
                $('#toTop').fadeIn(); 
                } else { 
                $('#toTop').fadeOut(); 
                } 
            });
        
        // header
        
         $(window).scroll(function(){
             var scrolled=$(window).scrollTop();
             
             if( scrolled>300) {
                $(".header").addClass("header-fixed");
             } else{
                 $(".header").removeClass("header-fixed");
             }
         });
        
        
        //팝업
        $(".button").click(function(){
			$(".popup-back").addClass("popup-on");
			$(".popup").css("display", "none");
			$(".popup").eq( $(this).index() ).slideDown("fast");
		});	
		$(".x-button").click(function(){
			$(".popup").slideUp("fast");
			$(".popup-back").removeClass("popup-on");
		});
        
        
        // 브랜드 탭
        
        /*$(".paradigm-exp").click(function(){            
            $(this).addClass("pexp-sel");
        });*/
        // 프로세스 탭
        $(".ps-tab").click(function(){
            $(".h1-top").removeClass("ps-tab-sel");
            $(this).children(".h1-top").addClass("ps-tab-sel");
            $(".ps-tview").removeClass("ps-tview-sel");
            $(".ps-tview").eq($(this).index()).addClass("ps-tview-sel");
        });
        // shop 탭
        $(".sp-tab").click(function(){
            $(".h1-top2").removeClass("ps-tab-sel");
            $(this).children(".h1-top2").addClass("ps-tab-sel");
            $(".ps-tview").removeClass("ps-tview-sel");
            $(".ps-tview").eq($(this).index()).addClass("ps-tview-sel");
        });
	});
