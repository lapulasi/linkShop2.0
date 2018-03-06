$(function () {
    $('.mapPage').on('touchmove touchstart', function (event) {//禁止浏览器的滑动
        event.preventDefault();
    });

    var isPage2 = false;
    var height = document.body.clientHeight || document.documentElement.clientHeight;//页面的高度
    var page2Height = $('.detailPage').height();
    var page2slideTop = height - page2Height; //底部滑块完全显示所需的高度值
    if (page2slideTop>0) {
        $('.detailPage').on('touchmove touchstart', function (event) {//禁止浏览器的滑动
            event.preventDefault();
        });
    }
    $(window).swipe({
        swipeUp: function (e, direction, distance, duration, fingerCount) {
            console.log('up');
            console.log("你用"+fingerCount+"个手指以"+duration+"秒的速度向" + direction + "滑动了" +distance+ "像素 " );
            console.log(height + '//' + page2Height + '//' + page2slideTop);
            if (!isPage2) {
                var page1_top = e.pageY;//手势滑动结束的top值
                console.log(e.pageY + '//' + e.clientY + '//' + e.screenY);
                if (distance > height / 4) {
                    if (page2slideTop > 0) {
                        $(".detailPage").show().animate({top: page2slideTop}, 500);
                    } else {
                        $(".detailPage").show().animate({top: '10%'}, 500);
                    }
                    isPage2 = true;
                }
            }

        },
        swipeDown: function (e, direction, distance, duration, fingerCount) {
            console.log('down');
            if (isPage2) {
                var page2_top = e.pageY;//手势滑动结束的top值
                console.log(page2_top);
                var page2_distance = page2Height / 2;
                if ((distance > page2Height / 2 && page2slideTop >0) || (distance > height / 4 && page2slideTop < 0)) {//page2的总高度小于一屏
                    $(".detailPage").animate({top: '100%'}, 500, function () {
                        $(".detailPage").hide();
                    });
                    isPage2 = false;
                }
            }
        }
    });


})