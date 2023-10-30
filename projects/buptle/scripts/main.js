// JavaScript Document

$(document).ready(function(){
    new WOW().init();
    
    

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
    // 모달 공용 modal_off
    $(document).on("click", ".modal_on_demo", function(){
        $(".modal_fixed").addClass("active");
    });

    // 모달 공용 modal_off
    $(document).on("click", ".modal_fixed .modal_off", function(){
        $(this).closest(".modal_fixed").removeClass("active");
    });
    // 모달_공용 modal_fixed: 배경 클릭 시 모달창 닫힘_공용
    $(document).on("click", ".modal_fixed", function(e){
        if (!$(".modal_section").is(e.target) && $(".modal_section").has(e.target).length === 0){
            $(this).removeClass("active");
        }
    });

    // 공용 tab
    $(document).on( "click", ".tab", function(){
        var tabClass = $(this).parents(".tab_wrap");
        var tabGetId = tabClass.attr('id');
        console.log(tabClass);
        $("#"+tabGetId+" .tab").removeClass("active");
        $(this).addClass("active");
        $("#"+tabGetId+" .tview").removeClass("active");
        $("#"+tabGetId+" .tview").eq($(this).index()).addClass("active");
    });
    
    
    function teamWhyBoxH(){
        $('.team_why_box').css("height", $('.team_why').height());
    }
    teamWhyBoxH();
    
    $(window).resize(function(){
        teamWhyBoxH();
    });
    
    
    

    // img_only_view scroll fixed
    $(window).scroll(function(){
        var scrolled = $(window).scrollTop();

        // Web gnb_sel Scroll
        if ( scrolled > 180 ) {
            $('.customer_review_summary').addClass('fixed');
        } else {
            $('.customer_review_summary').removeClass('fixed');
        }
    });
}); // document.ready.function.end
