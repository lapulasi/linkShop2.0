$(".content").on('touchstart', function (evt) {
    var e = event || evt;
    e.preventDefault();//阻止其他事件
    //要做的事情
}).on('touchmove', function (evt) {
    var e = event || evt;
    e.preventDefault();//阻止其他事件

    // 如果这个元素的位置内只有一个手指的话
    if (e.targetTouches.length == 1) {
        var touch = e.targetTouches[0];  // 把元素放在手指所在的位置
        var scroll_left = parseInt($(this).width()) / 2 - touch.pageX;
//            console.log(scroll_left);
        if (scroll_left < 205 && scroll_left > -15) {
            $(this).css("left", ( -scroll_left + 'px'));
        }
    }
}).on('touchend', function (evt) {
    var e = event || evt;
    e.preventDefault();//阻止其他事件
})