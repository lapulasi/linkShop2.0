/*重复到店人数*/
getWorkTimeTrend();

function getWorkTimeTrend() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('repeat-arrive-number'));

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
            data: ["12.06", "12.07", "12.08", "12.09", "12.10", "12.11", "12.12", "12.13"]
        },
        yAxis: {
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                /*color: '#9FA4AC',
                formatter: '{value}人'*/
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
            // data: ['0人', '25人', '50人', '75人', '100人']
        },
        series: [
            {
                type: 'bar',
                // barWidth: '80%',
                showSymbol: false,
                smooth: true,
                itemStyle: {
                    color: '#3B394C'
                },
                data: [46, 20, 30, 60, 20, 36, 34, 45]
            }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}