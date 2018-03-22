/*门店趋势图1*/
getStoreEffetTrend1();

/*门店趋势图2*/
getStoreEffetTrend2();

function getStoreEffetTrend1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('store-trend-line1'));
    var myChart2 = echarts.init(document.getElementById('store-trend-bar1'));

    var option1 = {
        title: {},
        tooltip: {/*鼠标点击效果*/
            show: true,
            trigger: 'axis',
            showContent: false/*去掉浮层框*/
        },
        legend: {},
        grid: {
            left: '-5%',
            top: '0%',
            right: '0%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC'
            },
            data: ["12.06", "12.07", "12.08", "12.09", "12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16", "12.17", "12.18", "12.19", "12.20"]
        },
        yAxis: {
            show: false
        },
        series: [{
//            name: '销量',
            type: 'line',
            smooth: true,
            data: [5, 20, 36, 10, 10, 20, 36, 10, 10, 10, 10, 20, 20, 50, 20],
            showSymbol: false,
            yAxisIndex: 0,
            lineStyle: {
                width: 3,
                color: '#6F92EA'
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
                    color: '#3BCBCA'
                },
            }]
    };
// 指定图表的配置项和数据
    var option2 = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '-5%',
            top: '0%',
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
                    color: '#312D3F'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: '#2C293B'
                }
            }
        },
        series: [{
            type: 'line',
            smooth: true,
            showSymbol: false,
            yAxisIndex: 0,
            lineStyle: {
                width: 3,
                color: '#FF7474'
            },
            data: [5, 20, 36, 10, 10, 20, 20, 36, 10, 20, 36, 10, 20, 26, 30]
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    myChart2.setOption(option2);
}

function getStoreEffetTrend2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('store-trend-line2'));
    var myChart2 = echarts.init(document.getElementById('store-trend-bar2'));

    var option1 = {
        title: {},
        tooltip: {/*鼠标点击效果*/
            show: true,
            trigger: 'axis',
            showContent: false/*去掉浮层框*/
        },
        legend: {},
        grid: {
            left: '-5%',
            top: '0%',
            right: '0%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC'
            },
            data: ["12.06", "12.07", "12.08", "12.09", "12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16", "12.17", "12.18", "12.19", "12.20"]
        },
        yAxis: {
            show: false
        },
        series: [{
//            name: '销量',
            type: 'line',
            smooth: true,
            data: [5, 20, 36, 10, 10, 20, 36, 10, 10, 10, 10, 20, 20, 50, 20],
            showSymbol: false,
            yAxisIndex: 0,
            lineStyle: {
                width: 3,
                color: '#A14BEC'
            },
        },
            {
//                name: '销量',
                type: 'line',
                smooth: true,
                data: [15, 20, 26, 30, 20, 50, 20, 26, 30, 30, 20, 50, 20, 26, 30],
                showSymbol: false,
                yAxisIndex: 0,
                areaStyle: {
                    color:  'rgb(252,197,10,0.10)'
                },
                lineStyle: {
                    width: 3,
                    color: '#FCC50A'
                },
            }]
    };
// 指定图表的配置项和数据
    var option2 = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '-5%',
            top: '0%',
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
                    color: '#312D3F'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: '#2C293B'
                }
            }
        },
        series: [{
            type: 'bar',
            // barWidth: '80%',
            itemStyle: {
                color: '#3B394C'
            },
            data: [5, 20, 36, 10, 10, 20, 20, 36, 10, 20, 36, 10, 20, 26, 30]
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    myChart2.setOption(option2);
}