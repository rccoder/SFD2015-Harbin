$(function() {

    //调节样式
    function change(bgHeight, bgWidth) {
        $(".section-slider").css("height", bgHeight);
        $(".bg").css('height', bgHeight);
        $(".section-slider .logo").css("margin-top", bgHeight / 2.5);
        if(bgWidth <= 710) {
        	$(".section-slider .time-addr").css("margin-top", 20);
        } else {
        	$(".section-slider .time-addr").css("margin-top", bgHeight / 1.5);
        }
    }

    var bgHeight = $(window).height();
    var bgWidth = $(window).width();
    change(bgHeight, bgWidth);

    //窗口大小发生改变
    $(window).resize(function() {
        var bgHeight = $(window).height();
        var bgWidth = $(window).width();
        change(bgHeight, bgWidth);

    });

    //导航条点击事件
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        console.log(top)
        if (top >= 200) {
            $(".section-header").css("display", "block");
        } else {
            $(".section-header").css("display", "none");
        }
    });

    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

    $('#start').click(function() {
        $body.animate({
            scrollTop: $('.section-slider').offset().top
        }, 1000);
        return false;
    });
    $('#intro').click(function() {
        $body.animate({
            scrollTop: $('.section-intro').offset().top - 350
        }, 1000);
        return false;
    });
    $('#about').click(function() {
        $body.animate({
            scrollTop: $('.section-footer').offset().top
        }, 1000);
        return false;
    });


});
