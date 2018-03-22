/*增长趋势*/
getGrowthTrend();
// verticalSlide(".content");

/*日间服务能力*/
getDayService();

/*各店数据*/
getShopData();


function getGrowthTrend() {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('growth-trend-line'));
    var myChart2 = echarts.init(document.getElementById('growth-trend-bar'));

// 指定图表的配置项和数据
    var option1 = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '-5%',
            top: '10%',
            right: '0%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            // show: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC'
            },
            data: ["12.06", "12.07", "12.08", "12.09", "12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16", "12.17", "12.18", "12.19", "12.20"]
        },
        yAxis: {
            // show: false
            axisLine: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
        },
        series: [{
            type: 'bar',
            // barWidth: '80%',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#D0DDFF'
                }, {
                    offset: 1,
                    color: '#A8C4F6'
                }]) // 区域填充背景色
            },
            data: [5, 20, 36, 10, 10, 20, 20, 36, 10, 20, 36, 10, 20, 26, 30]
        }]
    };
    var option2 = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '-5%',
            top: '10%',
            right: '0%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            show: false,
            data: ["12.06", "12.07", "12.08", "12.09", "12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16", "12.17", "12.18", "12.19", "12.20"]
        },
        yAxis: {show: false}/*[
        {
            show: false,
            /!*min:,
            max:,*!/
            data:[]
        },
        {
            show: false,
            /!*min:,
            max:,*!/
            data:[]

        }]*/,
        series: [{
//            name: '销量',
            type: 'line',
            smooth: true,
            data: [5, 20, 36, 10, 10, 20, 36, 10, 10, 10, 10, 20, 20, 50, 20],
            showSymbol: false,
            yAxisIndex: 0,
            lineStyle: {
                width: 3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#6F92EA'
                }, {
                    offset: 1,
                    color: '#3BCBCA'
                }]) // 区域填充背景色
            },
        },
            {
//                name: '销量',
                type: 'line',
                smooth: true,
                data: [15, 20, 26, 30, 20, 50, 20, 26, 30, 30, 20, 50, 20, 26, 30],
                showSymbol: false,
                yAxisIndex: 0,
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF7474'
                    }, {
                        offset: 1,
                        color: '#A14BEC'
                    }]) // 区域填充背景色
                },
            }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    myChart2.setOption(option2);
}

function verticalSlide(className) {
    $(className).on('touchstart', function (evt) {
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
}

function getDayService() {
    var myChart = echarts.init(document.getElementById('day-service-line'));
    var option = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '0%',
            top: '10%',
            right: '8%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            data: ["8点", "10点", "12点", "14点", "16点", "18点", "20点", "22点"]
        },
        yAxis: {
            show: false
        }/*[
        {
            show: false,
            /!*min:,
            max:,*!/
            data:[]
        },
        {
            show: false,
            /!*min:,
            max:,*!/
            data:[]

        }]*/,
        series: [{
//            name: '销量',
            type: 'line',
            smooth: true,
            data: [5, 20, 36, 10, 20, 20, 50, 20],
            showSymbol: false,
            yAxisIndex: 0,
            lineStyle: {
                width: 3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#6F92EA'
                }, {
                    offset: 1,
                    color: '#3BCBCA'
                }]) // 区域填充背景色
            },
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function getShopData() {
    var myChart = echarts.init(document.getElementById('shop-data-bar'));
    // 指定图表的配置项和数据
    var option = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '3%',
            top: '10%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            // show: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC',
                formatter: '{value}h'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            min: 1,
            max: 10,
            splitNumber: 9,
            // data: ["1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h"]
        },
        yAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC'
            },
            data: ['白石洲店', '大冲店', '科技园店', '南油店', '桃园店', '世界之窗店', '海岸城店']
        },
        series: [{
            type: 'bar',
            // barWidth: '80%',
            itemStyle: {
                color: '#6F92EA'
            },
            data: [6.4, 6.6, 7.2, 7.6, 8.4, 9.4, 9.7]
        }]
    };
    myChart.setOption(option);
}

