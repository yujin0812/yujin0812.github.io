// JavaScript Document

	$(document).ready(function(){
        // 드로워 스크립트
		$(".minheader-ham").click(function	(){
			$(".drawer").addClass("drawer-on");
            $(".drawer-popup").addClass("popup-on");
		});
		$(".drawer-xbtn").click(function(){
			$(".drawer").removeClass("drawer-on");
            $(".drawer-popup").removeClass("popup-on");
		});
        // FAQ 슬라이드토글
        $('.faq-exp').click(function(){
            $(this).next().slideToggle('fast')
            return false;
        });
        // TOP버튼
        $('body').append('<div id="toTop"><i class="fa fa-angle-double-up fa-5x"></i></div>'); 
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
        
        // 브랜드 탭
        $(".b-tab").click(function(){
            $(".b-tab").removeClass("b-tab-sel");
            $(this).addClass("b-tab-sel");
            $(".b-tview").removeClass("b-tview-sel");
            $(".b-tview").eq($(this).index()).addClass("b-tview-sel");
        });
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
        // FAQ 슬라이드 토글
        $(".faq-exp").click(function() {
	    $(this).next().slideToggle("fast");
	});
	});
