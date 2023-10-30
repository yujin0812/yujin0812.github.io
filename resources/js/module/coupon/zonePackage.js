$(document).ready(function(){
    $('.couponTab li a').click(function(e){
        $(this).parent().addClass('selected').siblings().removeClass('selected');
    });
});