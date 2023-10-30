// JavaScript Document
$(document).ready(function(){

    // 공용 셀렉트
    $('select').niceSelect();

    // header
    var $header = $("#header");
    var $ham = $("#header .ham");
    $ham.click(function(){
        if( $header.hasClass("gnb_on") ) {
            $header.removeClass("gnb_on");
        } else {
            $header.addClass("gnb_on");
            $(".edit_search").removeClass("active");
        }
    });
    
    // 공용 tab
    $(".tab_wrap .tab").click(function(){
        var $tabWrap = $(this).closest(".tab_wrap");
        var $tabMenu = $(this).siblings(".tab");
        var $tabTview = $($tabWrap).children(".tviews").children(".tview");
        $($tabMenu).removeClass("active");
        $(this).addClass("active");
        $($tabTview).removeClass("active");
        $($tabTview).eq($(this).index()).addClass("active");
    });
    
    // toggle
    $(".toggle_hd").click(function(){
        if( $(this).hasClass("active") ) {
            $(this).removeClass("active");
            $(this).next(".toggle_cont").slideUp("fast");
        } else{
            $(this).addClass("active");
            $(this).next(".toggle_cont").slideDown("fast");
        }
    });
    // 공용 모달 on
    $("[data-modal]").click(function() {
        var dataModal = $(this).data("modal");
        $("#"+dataModal).addClass("active");
        modalBodyLock();
    });
    // 공용 modal_off
    $(document).on("click", ".modal_fixed .modal_off", function(){
        $(this).closest(".modal_fixed").removeClass("active");
        modalBodyLock();
    });
    // 공용 modal_fixed: 배경 클릭 시 모달창 닫힘
    $(document).on("click", ".modal_fixed", function(e){
        if (!$(".modal_section").is(e.target) && $(".modal_section").has(e.target).length === 0){
            $(this).removeClass("active");
            modalBodyLock();
        }
    });
    
    

    // 공용 active_ul
    $(document).on("click", ".active_ul>li", function(){
        var $activeRe = $(this).siblings("li");
        $($activeRe).removeClass("active");
        $(this).addClass("active");
    });
    
    // list_box_toggle li.active
    $(document).on("click", ".list_box_toggle>li", function(e){
        if (!$(".btn_toggle").is(e.target) && $(".btn_toggle").has(e.target).length === 0){
            var $toggleCont = $(this).find(".list_toggle_cont");
            if ( $(this).hasClass("active") ) {
                $(this).removeClass("active");
                $($toggleCont).removeClass("active");
                $($toggleCont).slideUp("fast");
            } else {
                $(this).addClass("active");
                $($toggleCont).addClass("active");
                $($toggleCont).slideDown("fast");
            }
        }
    });
    // list_box_toggle btn_toggle
    $(document).on("click", ".list_box_toggle .btn_toggle", function(){
        var $toggleCont = $(this).closest("li").find(".list_toggle_cont");
        if( $($toggleCont).hasClass("active") ) {
            $($toggleCont).removeClass("active");
            $($toggleCont).slideUp("fast");
        } else {
            $($toggleCont).addClass("active");
            $($toggleCont).slideDown("fast");
        }
    });
    
    
    // data-for
    $("[data-for]").click(function() {
        var dataFor = $(this).data("for");
        $(dataFor).addClass("active");
    });

    // data-active
    $("[data-active]").click(function() {
        var dataActive = $(this).data("active");
        var $dataThis = "#"+dataActive
        if( $(this).hasClass("active") ) {
            $(this).removeClass("active");
            $($dataThis).removeClass("active");
        } else {
            $(this).addClass("active");
            $($dataThis).addClass("active");
        }
    });



    // toTop
    $(document).on("click", "#toTop", function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
    // toTop active
    $(window).on("scroll", function() {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            $('#toTop').addClass('active'); 
        } else {
            $('#toTop').removeClass('active'); 
        }
        if ($(this).scrollTop() > 200) {
            $('#toTop').fadeIn();
        } else { 
            $('#toTop').fadeOut();
        }
    });
    
});
// end document ready


// 모달 공용 modalBodyLock
function modalBodyLock(){
    if( $(".modal_fixed").hasClass("active") ){
        $("body").addClass("lock");
    } else {
        $("body").removeClass("lock");
    }
}