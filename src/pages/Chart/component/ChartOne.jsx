/*
 * Author  hailie.pan
 * Date  2023-11-16 16:50:42
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-17 10:28:09
 * Description  file content
 */
import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

export default function ChartOne({ title, chartData, style, className }) {
  const legendTextColor = '#88c5ff';
  const axisLineColor = 'rgba(150,196,250,0.4)';
  const axisTickColor = '#76fbfd';

  const textSize = 20;
  const LabelColor = '#fff';

  const { xAxisData, seriesData } = chartData;

  let chartInstance;
  const statusLineChart = useRef({ title, chartData, style, className });

  const getOption = () => {
    const yAxis = seriesData.map((item) => ({
      type: 'value',
      name: item.name,
      nameGap: 10,
      nameTextStyle: {
        fontSize: 10
      },
      axisLine: {
        // 坐标轴轴线的颜色
        lineStyle: {
          color: 'rgb(180,223,253)'
        }
      },

      axisTick: {
        show: true,
        length: 2,
        // 刻度线的颜色
        lineStyle: {
          color: 'rgb(62,243,244)'
        }
      },

      axisLabel: {
        interval: 0,
        textStyle: {
          color: 'rgb(180,223,253)'
        },
        // 默认y轴字体大小
        fontSize: 14,
        // margin:文字到y轴的距离
        margin: 4
      },

      splitLine: {
        show: false
      }
    }));

    const series = seriesData.map((item, index) => ({
      name: item.name,
      type: 'line',
      data: item.data,
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      yAxisIndex: index,
      showSymbol: false,
      lineStyle: {
        width: 2,
        color: item.color
      },
      itemStyle: {
        normal: {
          color: item.color,
          borderColor: item.color
        }
      }
    }));

    return {
      title: {
        text: title,
        textStyle: {
          color: '#fff',
          fontSize: 14,
          fontWeight: 700
        },
        left: 'left',
        top: '2%'
      },
      legend: {
        icon: 'circle',
        top: '2%',
        right: '0%',
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'axis',

        backgroundColor: '#2b4a78',
        textStyle: {
          color: '#fff'
        },
        padding: [10, 10]
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '10%'
      },
      xAxis: [
        {
          type: 'category',
          data: xAxisData,
          axisLine: {
            // 坐标轴轴线的颜色
            lineStyle: {
              color: 'rgb(180,223,253)'
            }
          },
          axisTick: {
            show: true,
            length: 2,
            // 刻度线的颜色
            lineStyle: {
              color: 'rgb(62,243,244)'
            }
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: 'rgb(180,223,253)'
            },
            // 默认x轴字体大小
            fontSize: 14,
            // margin:文字到x轴的距离
            margin: 4
          },
          boundaryGap: false
        }
      ],

      yAxis: yAxis,
      series: series
    };
  };
  useEffect(() => {
    const renderedInstance = echarts.getInstanceByDom(statusLineChart.current);
    if (renderedInstance) {
      renderedInstance.clear();
    }
    chartInstance = echarts.init(statusLineChart.current);
    chartInstance.setOption(getOption(), true);
    chartInstance.resize();

    // 监听窗口尺寸变化时图表resize
    const resizeListener = window.addEventListener('resize', () => {
      chartInstance.resize();
    });

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [chartData]);

  return <div ref={statusLineChart} style={{ ...style }} />;
}
