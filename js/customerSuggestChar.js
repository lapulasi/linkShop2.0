/*人流结构*/
getPeopleStructure();

/*顾客最多时段*/
getCustomMaxTime();

/*顾客到店趋势*/
getCustomerShopTrend();

/*顾客长驻时间*/
getCustomLongTime();

/*各店人流占比*/
getShopFlowRatio();

function getPeopleStructure() {
    var myChart = echarts.init(document.getElementById('people-structure'));
    var option = {
        tooltip: {
            show: false
            /*trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"*/
        },
        grid: {
            left: '5%',
            top: '15%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        color: ['#5599FF','#3BCBCA', '#FCC50A', '#FF7474', '#A14BEC','#605C72'],
        legend: {
            orient: 'vertical',
            x: '60%',
            y: 30,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#A4A9B3'
            },
            data:[
                {name: '男 20-30岁', icon: 'rect'},
                {name: '男 30-40岁', icon: 'rect'},
                {name: '男 40-50岁', icon: 'rect'},
                {name: '女 20-30岁', icon: 'rect'},
                {name: '女 30-40岁', icon: 'rect'},
                {name: '其他', icon: 'rect'}
            ]
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                center: ['30%', '50%'],
                radius: ['30%', '75%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'男 20-30岁'},
                    {value:310, name:'男 30-40岁'},
                    {value:234, name:'男 40-50岁'},
                    {value:135, name:'女 20-30岁'},
                    {value:1548, name:'女 30-40岁'},
                    {value:135, name:'其他'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}

function getCustomMaxTime() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('custom-max-time'));

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
            bottom: '5%',
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
            data: ["16-17点", "17-18点", "18-19点", "15-16点", "14-15点", "19-20点"]
        },
        yAxis: {
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#9FA4AC',
                formatter: '{value}人'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            // data: ['0人', '25人', '50人', '75人', '100人']
        },
        series: [
            {
                type: 'bar',
                // barWidth: '80%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#6F92EA'
                    }, {
                        offset: 1,
                        color: '#A8C4F6'
                    }]) // 区域填充背景色
                },
                data: [26, 20, 20, 10, 20, 36]
            }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function getCustomerShopTrend() {
    var myChart = echarts.init(document.getElementById('customer-shop-trend'));
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
        },
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

function getCustomLongTime() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('custom-long-time'));

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
            bottom: '5%',
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
            data: ["16-17点", "17-18点", "18-19点", "15-16点", "14-15点", "19-20点"]
        },
        yAxis: {
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#9FA4AC',
                formatter: '{value}人'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            // data: ['0人', '25人', '50人', '75人', '100人']
        },
        series: [
            {
                type: 'bar',
                // barWidth: '80%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#6F92EA'
                    }, {
                        offset: 1,
                        color: '#A8C4F6'
                    }]) // 区域填充背景色
                },
                data: [46, 20, 30, 60, 20, 36]
            }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function getShopFlowRatio() {
    var myChart = echarts.init(document.getElementById('shop-flow-ratio'));
    var option = {
        tooltip: {
            show: false
            /*trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"*/
        },
        grid: {
            left: '5%',
            top: '15%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        color: ['#5599FF','#3BCBCA', '#FCC50A', '#FF7474', '#A14BEC','#605C72'],
        legend: {
            orient: 'vertical',
            x: '60%',
            y: 30,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#A4A9B3'
            },
            data:[
                {name: '国美海岸城店', icon: 'rect'},
                {name: '苏宁桃园店', icon: 'rect'},
                {name: '国美会展中心店', icon: 'rect'},
                {name: '国美大冲店', icon: 'rect'},
                {name: '苏宁西乡店', icon: 'rect'},
                {name: '国美白石洲店', icon: 'rect'}
            ]
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                center: ['30%', '50%'],
                radius: ['30%', '75%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'国美海岸城店'},
                    {value:310, name:'苏宁桃园店'},
                    {value:234, name:'国美会展中心店'},
                    {value:335, name:'国美大冲店'},
                    {value:148, name:'苏宁西乡店'},
                    {value:435, name:'国美白石洲店'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}