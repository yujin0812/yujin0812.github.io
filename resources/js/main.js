// JavaScript Document

$(document).ready(function(){
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

    // toTop
    $(document).on("click", ".toTop", function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
    // toTop active
    $(window).on("scroll", function() {
        // var scrollHeight = $(document).height();
        // var scrollPosition = $(window).height() + $(window).scrollTop();
        // if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        //    $('.toTop').addClass('active'); 
        // } else {
        //     $('.toTop').removeClass('active'); 
        // }
        if ($(this).scrollTop() > 200) {
            $('.toTop').fadeIn('200');
        } else { 
            $('.toTop').fadeOut('200');
        }
    });

    // tab tview 
    $(".list_tab").click(function(){
        $(".modal_on").removeClass("modal_on");
        $(".list_tview").eq($(this).index()).addClass("modal_on");
        buttonOn()
    })
    
    // modal prev next
    var totalCount = $('.list_tview').length;
    
    $('.list_prev').click(function() {
        var clicked = $('.list_tview.modal_on')
        var currentFocus = getcurrentFocus(clicked)
        var nextFocus = currentFocus - 1;

        if (nextFocus < 0){
            nextFocus = totalCount - 1;
        }
        nextClassToggle(nextFocus)
    })
    $('.list_next').click(function() {
        var clicked = $('.list_tview.modal_on')
        var currentFocus = getcurrentFocus(clicked)
        var nextFocus = currentFocus + 1;

        if (nextFocus >= totalCount){
            nextFocus = 0;
        }

        nextClassToggle(nextFocus)
    })
    function getcurrentFocus(clicked){
        return clicked.index();
    }
    function nextClassToggle(focus){
        $('.list_tview.modal_on').removeClass('modal_on')
        $('.list_tview').eq(focus).addClass('modal_on')
    }
    $(".tview_close").click(function(){
        buttonClose()
    });
    $(".modal_back").click(function(){
        buttonClose()
    });
    
    // modal on off
    function buttonOn(){
        $(".list_btn_wrap").eq(0).css("display", "block");
        $(".list_modal").addClass("back_on");
        $(".modal_back").addClass("back_on");
        $("body").addClass("body_lock");
    }
    function buttonClose(){
        $(".list_btn_wrap").eq(0).css("display", "none");
        $(".list_modal").removeClass("back_on");
        $(".modal_back").removeClass("back_on");
        $("body").removeClass("body_lock");
    }
    buttonClose()
        
        

    // Header gnb-sel Scroll
    $(window).scroll(function(){
        var scrolled = $(window).scrollTop();


        // Mobile drawer_gnb_sel Scroll
        if ( scrolled < 700 ) {
            $(".drawer_gnb li a").removeClass("drawer_gnb_sel");
            $(".drawer_gnb li a").eq(0).addClass("drawer_gnb_sel");
        } else if ( scrolled < 2000 ) {
            $(".drawer_gnb li a").removeClass("drawer_gnb_sel");
            $(".drawer_gnb li a").eq(1).addClass("drawer_gnb_sel");
        } else if ( scrolled < 3400 ) {
            $(".drawer_gnb li a").removeClass("drawer_gnb_sel");
            $(".drawer_gnb li a").eq(2).addClass("drawer_gnb_sel");
        } else if ( scrolled < 4400 ) {
            $(".drawer_gnb li a").removeClass("drawer_gnb_sel");
            $(".drawer_gnb li a").eq(3).addClass("drawer_gnb_sel");
        } else {
            $(".drawer_gnb li a").removeClass("drawer_gnb_sel");
            $(".drawer_gnb li a").eq(4).addClass("drawer_gnb_sel");
        }
    });

}); // document.ready.function.end
