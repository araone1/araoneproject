$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#navi").css('color','#fff');
        } else {
            $("#navi").css('color','#333');
        }
    });
