// JavaScript Document

	$(document).ready(function(){
        
        // 메인 탭
        $(".trade-tab").click(function(){
            $(".trade-tview").removeClass("tview-sel");
            $(".trade-tview").eq($(this).index()).addClass("tview-sel");
        });
        
        // main-table click
        $(".main-table tbody tr").click(function(){
            $(".main-table tbody tr td").removeClass("table-tr-sel");
            $(this).children("td").addClass("table-tr-sel");       
        });
        // mobile-table click
        $(".mobile-table tbody tr").click(function(){
            $(".mobile-table tbody tr td").removeClass("mobile-table-sel");
            $(this).children("td").addClass("mobile-table-sel");
        });

        // trade-table click
        $(".trade-table tbody tr").click(function(){
            $(".trade-popup").css('display', 'block');
        });
        $(".btn-cancel").click(function(){
            $(".trade-popup").css('display', 'none');
        });
        
        // mobile-table click
        $(".complete-btn").click(function(){
            $(this).next().slideToggle('fast');
        });
        
        // trade-table click
        $(".coin-select-btn").click(function(){
            $(".mobile-wallet-tab").addClass("tview-sel");
            $(".wallet-tview").removeClass("tview-sel");
        });
        
        // wallet 탭
        $(".wallet-tab").click(function(){
            $(".wallet-tview").removeClass("tview-sel");
            $(".wallet-tview").eq($(this).index()).addClass("tview-sel");
            // tab 새로 누르면 deposit 먼저 보이기 (새로고침 효과)
            $(".wallet-inner-tview").removeClass("tview-sel");
            $(".wallet-deposit").addClass("tview-sel");
            // tab 새로 누르면 deposit btn에 btn-sel (새로고침 효과)
            $(".wallet-tab-btn").removeClass("wallet-tab-btn-sel");
            $(".wallet-tab-deposit").addClass("wallet-tab-btn-sel");
        });
        // wallet 탭
        $(".wallet-tab-btn").click(function(){
            $(".wallet-tab-btn").removeClass("wallet-tab-btn-sel");
            $(this).addClass("wallet-tab-btn-sel");
            $(".wallet-inner-tview").removeClass("tview-sel");
            $(".wallet-inner-tview").eq($(this).index()).addClass("tview-sel");
        });
        
        // wallet popup
        $(".withraw-btn").click(function(){
            $(".wallet-popup").css('display', 'block');
        });
        $(".btn-cancel").click(function(){
            $(".wallet-popup").css('display', 'none');
        }); 
	});

