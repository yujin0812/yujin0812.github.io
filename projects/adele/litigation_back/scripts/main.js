// JavaScript Document
$(document).ready(function(){

    // 공용 셀렉트
    $('select').niceSelect();
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
    // auto_textarea
    $("textarea.auto_textarea").on('keydown keyup', function () {
        $(this).height(1).height( $(this).prop('scrollHeight') );
    });
    $("input.dd").on('keydown keyup', function () {
        var dfsdf = $(this).val().length;
        var dfsdssf = dfsdf * 10;
        $(this).css("width", dfsdssf + 16 + 'px');
    });
    // header > gnb > lnb 사이즈
    $(window).resize(function(){
        lnbSize();
    });
    lnbSize();
    // 공용 tab
    $(document).on( "click", ".tab", function(){
        let tabClass = $(this).parents(".bt_tab");
        let tabGetId = tabClass.attr('id');
        $("#"+tabGetId+" .tab").removeClass("active");
        $(this).addClass("active");
        $("#"+tabGetId+" .tview").removeClass("active");
        $("#"+tabGetId+" .tview").eq($(this).index()).addClass("active");
    });
    // hd_user: header 우측 상단 프로필
    $(document).on("click", ".hd_user", function(){
        if($(this).hasClass("active")) {
            $(this).removeClass("active")
            $(".hd_user_ul").slideUp("fast");
        } else {
            $(this).addClass("active")
            $(".hd_user_ul").slideDown("fast");
        }
    });
    // 필수 적용: label select top 위치 계산 css
    function btSelect2LabelTop() {
        var select2ViewHeight = $(".label_sel_ul").height();
        var btSelect2Top = select2ViewHeight + 20;
        $(".bt_select2").css("top", btSelect2Top);
    }
    btSelect2LabelTop();
    // label select 토글효과
    $(document).on("click", ".select2_view .label_sel_ul", function(){
        $(this).next(".bt_select2").slideToggle("fast");
    });
    $(document).on("click", ".bt_select2 .select2_results>li", function(){
        $(this).parent(".bt_select2").slideUp("fast");
    });

    // 190806 공지사항 추가 수직 슬라이더
    $(function() {
        // Verical Slider
        var $row = $('.vertical-slider__item'),
            $container = $('.vertical-slider');
        currentMarginTop = 0,
            itemHeight = $row.height(),
            rowsNr = $row.length, 
            maxPadd = (rowsNr-1) * itemHeight;
        console.log(itemHeight);

        function setHeight() {
            console.log(itemHeight);
            $('.header_notice__dynamic').css({
                'height' : itemHeight
            });
        }
        function animateSlider () {
            //setInterval(moveRows,2000);
            setHeight();
            function moveRows () {
                $container.animate({
                    'margin-top' : currentMarginTop - itemHeight  
                },500);
                currentMarginTop -= itemHeight;
            }
            if (currentMarginTop == -(maxPadd)) {
                $container.css({
                    'margin-top' : 0
                })
                currentMarginTop = 0;
                // moveRows();
            } else {
                moveRows();
            }
        }
        function automateSlider (interval) {
            setInterval(animateSlider,interval);  
        }
        automateSlider(3000);
    });
    // 필수 적용: 결재내역 slideToggle
    $(document).on("click", ".approval_on", function(){
        $(".number_approval_view").slideToggle("fast");
    })
    // workflow_slideToggle: 관리자 > 신규 워크플로우 생성 > 기본 정보 입력 클릭 시 입력 정보 추가 slideToggle
    $(document).on("click", "#workflow_add", function(){
        $("#workflow_add_ul").slideToggle("fast");
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });
    // btn_search_filter: 상세필터 버튼 누루면 slideDown되는 부분
    $(document).on("click", ".btn_search_filter", function(){
        if($(".btn_search_filter").hasClass("active")) {
            $(".search_filter_wrap").slideUp("fast");
            $(".btn_search_filter").removeClass("active");
        } else {
            $(".search_filter_wrap").slideDown("fast");
            $(".btn_search_filter").addClass("active");
        }
    });
    // 관리자 > tag > tag input textWidth
    $.fn.textWidth = function(text, font) {
        if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
        $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
        return $.fn.textWidth.fakeEl.width();
    };
    $('.input_tag').on('input', function() {
        var inputWidth = $(this).textWidth();
        var inputWidth2 = inputWidth + 45;
        $(this).css({
            width: inputWidth2
        })
    }).trigger('input');
    function inputWidth(elem, minW, maxW) {
        elem = $(this);
        console.log(elem)
    }
    var targetElem = $('.width-dynamic');
    inputWidth(targetElem);
    // 관리자 > tag > 태그 추가
    $(document).on( "click", "#adminTagAdd", function(){
        var tagAdd = '<div class="tag admin"><input type="text" class="input_tag sm_p58 admin_tag_add" autofocus><a class="btn_x"></a></div>'
        if($(".tag.admin .input_tag").hasClass("admin_tag_add")){
            $(".admin_tag_add").focus();
        } else {
            $(this).before(tagAdd);
        }
    });

    // ========================================== 모달 공용 ==========================================

    // $(".modal_fixed").addClass("active");  //모달 display: block
    // .modal_modalBodyLock();  //body 스크롤 잠금

    // ========================================== //모달 공용 ==========================================

    // 모달_공용 modalOn: 버튼과 레이아웃 id로 공용 사용
    $(document).on("click", "[id*=modalOn]", function(){
        let modalOnId = $(this).attr('id');
        let modalOnLyt = ("#")+modalOnId+("Layout");
        $(modalOnLyt).addClass("active");
        modalBodyLock();
    });
    // 모달_공용 modal_off: 모달창에서 버튼 클릭 시 모달창 닫힘_class="modal_off"_별도 스타일 없음 기능 class

    // 모달 공용 modal_off
    $(document).on("click", ".modal_fixed .modal_off", function(){
        $(this).closest(".modal_fixed").removeClass("active");
        modalBodyLock();
    });
    // 모달_공용 modal_fixed: 배경 클릭 시 모달창 닫힘_공용
    $(document).on("click", ".modal_fixed", function(e){
        if (!$(".modal_section").is(e.target) && $(".modal_section").has(e.target).length === 0){
            $(this).removeClass("active");
            modalBodyLock();
        }
    });


    // ========================================== 우측 레이아웃 fixed_layout ==========================================

    // #fixed_contract 열기: 계약 관리 > 계약 중간화면 !선택자 샘플: .section__contract .cont_li_sub
    // 태그 추가
    $(document).on("click", ".modal_tag_on", function(){
        $("#modalOntagLayout").addClass("active");
        modalBodyLock();
    });
    // 관리자 -> 유저 관리
    $(document).on("click", ".section__admin_user .user_info", function(){
        $("#modalOnAdminUserLayout").addClass("active");
        modalBodyLock();
    });
    // 계약 중간화면 On_계약 리스트
    $(document).on("click", ".contract_list_wrap .contract_list .main_li_sub", function(){
        if(!$(".fixed_layout").hasClass("active")) {
            $("#fixed_contract").addClass("active");
            fixedLayoutOn();
        }
    });
    // 계약 중간화면 On_계약 리스트
    $(document).on("click", "#modalOnOfficialNote", function(){
        fixedLayoutOn();
    });
    // #modalOncontractCreateLayout 열기: 계약 관리 > 신규 계약 생성 > 계약 생성 !선택자 샘플: .temp_list_ul>li .btn__y
    $(document).on("click", ".temp_list_ul>li .btn__y", function(){
        $("#modalOncontractCreateLayout").addClass("active");
        fixedLayoutOn();
    });
    // #modalOncontractCreateLayout 닫기_버튼: 계약 관리 > 신규 계약 생성 > 계약 생성_버튼 클릭해서 닫기 !아이디를 잘못 지어서 변경 필요
    $(document).on("click", "#modalOncontractCreate", function(){
        $("#modalOncontractCreateLayout").removeClass("active");
        fixedLayoutOff();
    });
    // #fixedAdminGroupLayout 열기: 관리자 > 그룹 > 그룹 정보 !선택자 샘플: .section_group_list .sub
    $(document).on("click", ".section_group_list .sub", function(){
        $("#fixedAdminGroupLayout").addClass("active");
        fixedLayoutOn();
    });
    // fixed layout 닫기_배경: 관리자 > 그룹, 계약 관리 > 신규 계약 생성, 계약 관리 > 계약 중간 화면, 공문 발송 > 신규 공문 생성
    $(document).on("click", ".fixed_layout", function (e){
        if (!$(".fixed_content").is(e.target) && $(".fixed_content").has(e.target).length === 0){
            $(this).removeClass("active");
            fixedLayoutOff();
        }
    });
    // .fixed_layout2 열기/닫기: 계약 상세화면 > 계약 요약정보 열기/닫기 공용
    $(document).on("click", ".btn_chevron_double", function(){
        if( $(this).hasClass("active") ) {
            $(".btn_chevron_double").removeClass("active");
            $(".fixed_layout2").removeClass("active");
        } else {
            $(this).addClass("active");
            $(".fixed_layout2").addClass("active");
        }
    });


    // ========================================== 선택자 샘플 모달 ==========================================

    // #modalOnAdminUserLayout 열기: 관리자 -> 유저 관리 !선택자 샘플: .section__admin_user .user_info
    $(document).on("click", ".section__admin_user .user_info", function(){
        $("#modalOnAdminUserLayout").addClass("active");
        modalBodyLock();
    });
    // #modalOnUserLayout 열기: 공용_임직원 검색 !선택자 샘플: .modal_user_on
    $(document).on("click", ".modal_user_on", function(){
        $("#modalOnUserLayout").addClass("active");
        modalBodyLock();
    });
    // #modalOntagLayout 열기: 공용_태그 추가 !선택자 샘플: .modal_tag_on
    $(document).on("click", ".modal_tag_on", function(){
        $("#modalOntagLayout").addClass("active");
        modalBodyLock();
    });

    // ========================================== 샘플 or 사용 ==========================================

    // 샘플 or 사용: active_ul: li 클릭 시 active 효과 구현용 !원래는 ajax?로 처리되는 active효과에 대한 샘플용, 필요시 추가
    $(document).on("click", ".active_ul>li", function(){
        let activeUlClass = $(this).parents(".active_ul");
        let activeUlId = activeUlClass.attr('id');
        $("#"+activeUlId+" li").removeClass("active");
        $(this).addClass("active");
    });
    // 샘플 or 사용: active_ul: li 클릭 시 active 효과 구현용 !원래는 ajax?로 처리되는 active효과에 대한 샘플용, 필요시 추가
    $(document).on("click", ".sample_ul>li", function(){
        let sampleUlClass = $(this).parents(".sample_ul");
        $(sampleUlClass).children("li").removeClass("active");
        $(this).addClass("active");
    });
    // 샘플 or 사용: 관리자 > 워크플로우 > 신규 워크플로우 생성 > 전자계약/문서계약 > 문서계약 선택 시
    $(document).on("change", "input[name='wokrflow_contract_type']", function(){
        let workflowContractType = $("input[name='wokrflow_contract_type']:checked").val();
        if ( workflowContractType === "workflow_paper") {
            $(".workflow_paper_setting").css("display", "block");
        } else {
            $(".workflow_paper_setting").css("display", "none");
        }
    });
    // 샘플 or 사용: 모달_서명하기 > 내부인 > 라디오_탭: 회사/개인
    $(document).on("change", "input[name='sign_type']", function(){
        let signType = $("input[name='sign_type']:checked").val();
        $(".modal_sign .modal_sign_view").removeClass("active");
        $(".modal_sign .modal_sign_view").eq(signType).addClass("active");
    });
    // 샘플 or 사용: 모달_서명 > 외부인 > 라디오_탭: 회사/개인
    $(document).on("change", "input[name='sign_type_outsider']", function(){
        let signTypeOut = $("input[name='sign_type_outsider']:checked").val();
        $(".modal_sign_outsider .modal_sign_view").removeClass("active");
        $(".modal_sign_outsider .modal_sign_view").eq(signTypeOut).addClass("active");
    });


    // ========================================== 샘플 ==========================================

    // 샘플: 계약 관리 > 카테고리 active 효과 구현용 !ajax?로 처리하는게 아닌지? 필요시 이 부분 지우고 snb_ul에 active_ul과 id 추가해서 사용 가능
    $(document).on("click", ".snb_ul>li", function(){
        $(".snb_ul>li").removeClass("active");
        $(this).addClass("active");
    });
    
    // 샘플: 계약 관리 > 승인 요청 / 법무팀 신규 계약 생성 요청 검색 조건 버튼 active 효과 구현용
    $(document).on("click", ".tab_contract_filter>li", function(){
        if( $(this).hasClass("active") ){
            $(this).removeClass("active");
        } else {
            $(".tab_contract_filter>li").removeClass("active");
            $(this).addClass("active");
        }
    });

});
// end document ready

// 190729 lnbSize 수정됨
// function: header > gnb > lnb 사이즈
function lnbSize(){
    let lnbWidth = $("#header").width();
    $(".lnb").width(lnbWidth);
    let lnbHeight = $(".lnb").height() + 15;
    $("#header").css("margin-bottom", lnbHeight);
};
// fixedLayout 열기: body fixed_contract
function fixedLayoutOn(){
    $("body").addClass("fixed_contract");
}
// fixedLayout 닫기: body fixed_contract
function fixedLayoutOff(){
    $("body").removeClass("fixed_contract");
}
// 모달 공용 modalBodyLock
function modalBodyLock(){
    if(!$(".modal_fixed").hasClass("active")){
        $("body").removeClass("lock");
    } else {
        $("body").addClass("lock");
    }
}