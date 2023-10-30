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
    // tab tview 
    $(".list_tab").click(function(){
		$(".modal_on").removeClass("modal_on");
		$(".list_tview").eq($(this).index()).addClass("modal_on");
        buttonOn()
	});
    
    // modal prev next
    let totalCount = $('.list_tview').length;
    
    $('.list_prev').click(function() {
        let clicked = $('.list_tview.modal_on')
        let currentFocus = getcurrentFocus(clicked)
        let nextFocus = currentFocus - 1;

        if (nextFocus < 0){
            nextFocus = totalCount - 1;
        }
        nextClassToggle(nextFocus)
    })
    $('.list_next').click(function() {
        let clicked = $('.list_tview.modal_on')
        let currentFocus = getcurrentFocus(clicked)
        let nextFocus = currentFocus + 1;

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
    buttonToggle()
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
