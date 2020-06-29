import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const Chart = (props) => {
    const [lowTemp, avgTemp, highTemp, hourlyTime] = props.graphData;

    const options = {
        colors: ['#aaeeee','#82D071', '#F45B5B'],
        chart: {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                stops: [
                    [0, '#2a2a2b'],
                    [1, '#3e3e40']
                ]
            },
            borderColor: 'salmon',
            borderRadius: 20,
            borderWidth: 2,
            type: 'line'
        },
        yAxis: {
            title: {
                text: 'Temprature',
                style: {
                    color: '#FFF'
                }
            }
        },
        xAxis: {
            categories: hourlyTime,      
            lineColor: '#FFF',
            lineWidth: 1,
            plotOptions: {
                series: {
                    colors: [ '#0F5474','#82D071', '#F45B5B']
                }
            },
            gridLineColor: '#000',
            title: {
                text: 'Time',
                style: {
                    color: '#FFF'
                }
            }
        },
        legend: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            itemStyle: {
                color: '#FFFFFF'
            },
            itemHoverStyle: {
                color: '#E0E0E3'
            },
            itemHiddenStyle: {
                color: '#606063'
            },
            title: {
                text: 'LEGEND',
                style: {
                    color: 'pink',
                }
            }
        },
        series: [{
            name: 'Low Temprature',
            data: lowTemp
        },{
            name: 'Avg. Temprature',
            data: avgTemp
        }, {
            name: 'High Temprature',
            data: highTemp
        }],
      }

    return (
            <HighchartsReact
            highcharts={Highcharts}
            options={options}
            />
    )
}

export default Chart