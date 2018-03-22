/*平均日销售*/
getAverageSales();

/*周内分析*/
getWeeklyAnalysis();

/*销售竞争力分析*/
getSalesCompetitiveness();

function getAverageSales() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('average-sales'));

// 指定图表的配置项和数据
    var option = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '5%',
            top: '10%',
            right: '5%',
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
                color: '#9FA4AC',
            },
            data: ["7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月"]
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
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
            data: [20, 36, 10, 20, 36, 20, 50, 20],
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
            }
        },
            {
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
                data: [5, 20, 36, 20, 20, 10, 20, 36]
            }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function getWeeklyAnalysis() {
    // 基于准备好的dom，初始化echarts实例
    var myChart2 = echarts.init(document.getElementById('weekly-analysis-bar'));
    var myChart1 = echarts.init(document.getElementById('weekly-analysis-line'));

// 指定图表的配置项和数据
    var option1 = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '5%',
            top: '10%',
            right: '5%',
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
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
            // show: false
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
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
            data: [20, 36, 18, 10, 20, 26, 30]
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
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
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
            data: [5, 20, 36, 20, 36, 50, 20],
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
                data: [15, 20, 26, 50, 20, 26, 30],
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

function getSalesCompetitiveness() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('sales-competitiveness-analysis'));

// 指定图表的配置项和数据
    var option = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '5%',
            top: '15%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            name: '转化率',
            nameGap: -25,
            nameTextStyle: {
                color: '#9FA4AC'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
            // data: ["7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月"]
        },
        yAxis: {
            name: '销售额',
            // nameLocation: 'end',
            nameGap: 5,
            nameTextStyle: {
                color: '#9FA4AC'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: [{
//            name: '销量',
            type: 'scatter',
            symbolSize: 20,
            label: {
                color: '#fff',
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.name;
                    },
                    position: 'top'
                },
                backgroundColor: '#FF7474',
                padding: 8,
                borderRadius: 5
                /*formatter: '{a}',
                rich:{
                    a: {
                        width: 100,
                        height: 30,
                        backgroundColor: '#FF7474'
                    }
                }*/
            },

            data: [{name: '南山国美0', value: [10.0, 8.04], emphasis: {itemStyle: {color: '#FF7474'}}},
                {name: '南山国美1', value: [8.0, 6.95], emphasis: {itemStyle: {color: '#FF7474'}}},
                {name: '南山国美2', value: [13.0, 7.58], emphasis: {itemStyle: {color: '#FF7474'}}},
                {name: '南山国美3', value: [9.0, 8.81], emphasis: {itemStyle: {color: '#FF7474'}}},
                {name: '南山国美4', value: [11.0, 8.33], emphasis: {itemStyle: {color: '#FF7474'}}},
                {name: '南山国美5', value: [14.0, 9.96], emphasis: {itemStyle: {color: '#FF7474'}}},
                {name: '南山国美6', value: [6.0, 7.24], emphasis: {itemStyle: {color: '#FF7474'}}},
                {name: '南山国美7', value: [4.0, 4.26], emphasis: {itemStyle: {color: '#FF7474'}}},
                {name: '南山国美8', value: [12.0, 10.84], emphasis: {itemStyle: {color: '#FF7474'}}},
                {name: '南山国美9', value: [7.0, 4.82], emphasis: {itemStyle: {color: '#FF7474'}}},
                {name: '南山国美10', value: [5.0, 5.68], emphasis: {itemStyle: {color: '#FF7474'}}}
            ],
            itemStyle: {
                color: '#6F92EA'
            },
            tooltip: {
                formatter: '{b}',
                borderWidth: 5
            }
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}