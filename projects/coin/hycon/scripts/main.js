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
        
        $(".gnb-list").mouseenter(function(){
            $(".drop-menu").css('display', 'none');
            $(this).children(".drop-menu").css('display', 'block');
		});
        $(".drop-menu").mouseleave(function(){
            $(".drop-menu").css('display', 'none');
		});
        
        
        // tab move
		var tab_position;
		$('.maintab1').hover(function() {			
		  $('.main-tab-sel').css('background-position', '0px 61px');
		}, function() {
		  // on mouseout, reset the background colour		  
		  $('.main-tab-sel').css('background-position', tab_position);
		});
		$('.maintab2').hover(function() {
		  $('.main-tab-sel').css('background-position', '82px 61px');
		}, function() {
		  // on mouseout, reset the background colour		  
		  $('.main-tab-sel').css('background-position', tab_position);
		});
		$('.maintab3').hover(function() {
		  $('.main-tab-sel').css('background-position', '164px 61px');
		}, function() {
		  // on mouseout, reset the background colour		  
		  $('.main-tab-sel').css('background-position', tab_position);
		});
		$('.maintab4').hover(function() {
		  $('.main-tab-sel').css('background-position', '246px 61px');
		}, function() {
		  // on mouseout, reset the background colour		  
		  $('.main-tab-sel').css('background-position', tab_position);
		});
		$('.maintab5').hover(function() {			
		  if (!tab_position) {
			tab_position='0px 61px';
			$('.main-tab-sel').css('background-position', tab_position);
		  }
		  else $('.main-tab-sel').css('background-position', '328px 61px');
		}, function() {
		  // on mouseout, reset the background colour		  
		  $('.main-tab-sel').css('background-position', tab_position);
		});		
        
        $(".maintab1").click(function(){			
            $('.main-tab-sel').css('background-position', '0px 61px');
			tab_position='0px 61px';
		});
        $(".maintab2").click(function(){
            $('.main-tab-sel').css('background-position', '82px 61px');
			tab_position='82px 61px';
		});
        $(".maintab3").click(function(){
            $('.main-tab-sel').css('background-position', '164px 61px');
			tab_position='164px 61px';
		});
        $(".maintab4").click(function(){
            $('.main-tab-sel').css('background-position', '246px 61px');
			tab_position='246px 61px';
		});
        $(".maintab5").click(function(){
            $('.main-tab-sel').css('background-position', '328px 61px');
			tab_position='328px 61px';
		});
        
        // 메인 탭
        $(".maintab").click(function(){
            $(".maintview").removeClass("maintview-sel");
            $(".maintview").eq($(this).index()).addClass("maintview-sel");
        });
        
        // table_gs click
        $(".main-table tbody tr").click(function(){
            $(".main-table tbody tr td").removeClass("table-tr-sel");
            $(this).children("td").addClass("table-tr-sel");       
        });

        // login input on
        $(".login-input1").click(function(){
            $(this).addClass("login-input-on1");
		});
        $(".login-input2").click(function(){
            $(this).addClass("login-input-on2");
		});
        $(".login-input3").click(function(){
            $(this).addClass("login-input-on3");
		});
        $(".login-input4").click(function(){
            $(this).addClass("login-input-on4");
		});
        
        // wallet 주소 생성
        $(".wallet-address-btn").click(function(){
            $(".wallet-view-wrap").removeClass("wallet-view-sel");
            $(".wallet-view-wrap2").addClass("wallet-view-sel");
		});
        
        // FAQ 슬라이드토글
        $('.faq-exp').click(function(){
            $(this).next().slideToggle('fast');            
            if ($(this).hasClass('faq-exp-sel')) {
                $(this).removeClass('faq-exp-sel');
            }
            else {
                 $(this).addClass("faq-exp-sel");   
            }
            return false;
        });
        
        
	});
