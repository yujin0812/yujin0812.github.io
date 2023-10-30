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
        
        // Header fixed Scroll
        $(window).scroll(function(){
            var scrolled=$(window).scrollTop();

            if( scrolled>400) {
                $(".header").addClass("header_fixed");
            } else{
                $(".header").removeClass("header_fixed");
            }
        });
        
        // Main Next Section arrow Scroll
        $(window).scroll(function(){
            var scrolled=$(window).scrollTop();

            if( scrolled>400) {
                $(".nav_arrow").css("visibility", "hidden");
            } else{
                $(".nav_arrow").css("visibility", "visible");
            }
         });

        // Header gnb-sel
        $('.gnb li a').click(function(){
            $('.gnb li a').removeClass('gnb_sel');
            $(this).addClass('gnb_sel');
        });
        
        // Header gnb-sel Scroll
        $(window).scroll(function(){
            var scrolled = $(window).scrollTop();

            // Web gnb_sel Scroll
            if ( scrolled < 1000 ) {
                $(".gnb li a").removeClass("gnb_sel");
                $(".gnb li a").eq(0).addClass("gnb_sel");
            } else if ( scrolled < 2300 ) {
                $(".gnb li a").removeClass("gnb_sel");
                $(".gnb li a").eq(1).addClass("gnb_sel");
            } else if ( scrolled < 3400 ) {
                $(".gnb li a").removeClass("gnb_sel");
                $(".gnb li a").eq(2).addClass("gnb_sel");
            } else if ( scrolled < 4800 ) {
                $(".gnb li a").removeClass("gnb_sel");
                $(".gnb li a").eq(3).addClass("gnb_sel");
            } else {
                $(".gnb li a").removeClass("gnb_sel");
                $(".gnb li a").eq(4).addClass("gnb_sel");
            }

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

        // Mobile Header Drawer On
        $('.header_ham').click(function(){
            if ($(this).hasClass('header_ham_sel')) {
                $(this).removeClass('header_ham_sel');
                $('.drawer').removeClass("drawer_on");
            }
            else {
                 $(this).addClass("header_ham_sel");
                 $('.drawer').addClass("drawer_on");
            }
            return false;
        });
        
        // Mobile Header Drawer gnb-sel
        $('.drawer_gnb li a').click(function(){
            $('.drawer').removeClass("drawer_on");
            $('.header_ham').removeClass("header_ham_sel");
            $('.drawer_gnb li a').removeClass("drawer_gnb_sel");
            $(this).addClass("drawer_gnb_sel");
        });

        
}); // document.ready.function.end
