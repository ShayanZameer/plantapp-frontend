import React, { useEffect } from 'react';
import * as echarts from 'echarts'; // Make sure you have echarts installed

const BarChart = () => {
  useEffect(() => {
    const colors = ['#5470C6', '#91CC75', '#EE6666'];

    const option = {
      color: colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        right: '20%'
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Products', 'Users', 'Orders']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ]
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Products',
          position: 'right',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[0]
            }
          },
          
        },
        {
          type: 'value',
          name: 'Users',
          position: 'right',
          alignTicks: true,
          offset: 80,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[1]
            }
          },
          
        },
        {
          type: 'value',
          name: 'Orders',
          position: 'left',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[2]
            }
          },
          
        }
      ],
      series: [
        {
          name: 'Products',
          type: 'bar',
          data: [
            0,10,20,30,40,50
          ]
        },
        {
          name: 'Users',
          type: 'bar',
          yAxisIndex: 1,
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7,
            175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: 'Orders',
          type: 'line',
          yAxisIndex: 2,
          data: [
           0,10,20,30,40,50
          ]
        }
      ]
    };

    const chart = echarts.init(document.getElementById('myChart'));
    chart.setOption(option);

    // Clean up function to destroy the chart
    return () => {
      chart.dispose();
    };
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  return <div id="myChart" style={{ width: '100%', height: '400px',padding: ".5rem" }}></div>;
};


export default BarChart