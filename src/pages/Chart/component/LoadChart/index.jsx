/*
 * @Author: Hailie.Pan
 * @Date: 2023-12-27 13:48:54
 * LastEditors  Murphy.xie
 * LastEditTime  2024-02-03 10:05:23
 * @Description: 台区负荷情况折线图
 */
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { gsap } from 'gsap';

const textColor = '#fff';
const tooltipBackgroundColor = '#2b4a78'; // tooltip背景色

const YaxisLineColor = '#0092ff'; //Y轴轴线的颜色
const YaxisTickColor = '#7bc8ff'; //Y轴刻度的颜色
const YaxisLabelColor = '#fff'; //Y轴文字的颜色

const XaxisLineColor = '#0092ff'; //X轴轴线的颜色
const XaxisTickColor = '#7bc8ff'; //X轴刻度的颜色
const XaxisLabelColor = '#fff'; //X轴文字的颜色

const axisFontSize = '24px'; // 坐标字体大小
const legendFontSize = '22px';

export default function LoadChart({ title, chartData, style, className }) {
  let chartInstance;
  const statusLineChart = useRef();

  const nameConfig = [
    {
      name: '台区负荷',
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0, 146, 255, 0.8)',
              },
              {
                offset: 0.8,
                color: 'rgba(0, 146, 255, 0)',
              },
            ],
            false,
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10,
        },
      },
      itemStyle: {
        normal: {
          color: 'rgba(0, 146, 255, 1)',
          // color: 'red',
          borderColor: 'rgba(219,50,51,0.2)',
          borderWidth: 12,
        },
      },
    },
    {
      name: '储能电池充电',
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(255, 255, 255, 0.8)',
              },
              {
                offset: 0.8,
                color: 'rgba(255, 255, 255, 0)',
              },
            ],
            false,
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10,
        },
      },
      itemStyle: {
        normal: {
          color: '#fff',
          borderColor: 'rgba(137,189,2,0.27)',
          borderWidth: 12,
        },
      },
    },
  ];

  const getOption = () => {
    let series = chartData?.seriesData?.map((item, index) => ({
      data: item, // 是一个数组
      ...nameConfig[index],
      yAxisIndex: index,
      name: chartData.nameList && chartData.nameList[index],
      symbolSize: 5,
      type: 'line',
      smooth: true,
      lineStyle: {
        normal: {
          width: 4,
        },
      },
      markLine: chartData.markLine,
    }));

    if (chartData.effectScatter) {
      series.push(chartData.effectScatter);
    }

    const defaultYAxis = {
      type: 'value',
      name: '单位:kW',
      nameGap: 20,
      nameTextStyle: {
        fontSize: 18,
        color: YaxisLabelColor,
      },
      axisLine: {
        show: true,
        // 坐标轴轴线的颜色
        lineStyle: {
          color: YaxisLineColor,
        },
      },
      axisTick: {
        show: true,
        length: 4,
        // 刻度线的颜色
        lineStyle: {
          width: 4,
          color: YaxisTickColor,
        },
      },

      axisLabel: {
        interval: 0,
        textStyle: {
          color: YaxisLabelColor,
        },
        // 默认y轴字体大小
        fontSize: axisFontSize,
        // margin:文字到y轴的距离
        margin: 10,
      },

      splitLine: {
        show: false,
      },
    };

    const yAxis = chartData?.yAxis
      ? chartData?.yAxis.map((item) => ({
          ...defaultYAxis,
          ...item,
        }))
      : defaultYAxis;
    return {
      title: {
        text: title,
        textStyle: {
          color: textColor,
          fontSize: 14,
          fontWeight: 700,
        },
        left: 'left',
        top: '2%',
      },
      legend: {
        icon: 'rect',
        top: '2%',
        right: chartData?.yAxis?.length > 1 ? '20%' : '0',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 20,
        textStyle: {
          color: textColor,
          fontSize: legendFontSize,
        },
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: tooltipBackgroundColor,
        textStyle: {
          color: textColor,
        },
        padding: [10, 10],
      },
      grid: {
        left: '10px',
        right: '0',
        top: '40px',
        bottom: '0',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        axisLine: {
          // 坐标轴轴线的颜色
          lineStyle: {
            color: XaxisLineColor,
          },
        },
        axisTick: {
          show: true,
          length: 4,
          // 刻度线的颜色
          lineStyle: {
            width: 4,
            color: XaxisTickColor,
          },
          alignWithLabel: true,
        },
        axisLabel: {
          interval: chartData.interval || 1,
          textStyle: {
            color: XaxisLabelColor,
          },
          // 默认x轴字体大小
          fontSize: axisFontSize,
          // margin:文字到x轴的距离
          margin: 10,
        },
        // 坐标轴两边留白策略
        boundaryGap: ['20%', '20%'],
        data: chartData.xAxisData,
      },
      yAxis: yAxis,
      series: series,
    };
  };
  useEffect(() => {
    const renderedInstance = echarts.getInstanceByDom(statusLineChart.current);
    if (renderedInstance) {
      renderedInstance.clear();
    }
    chartInstance = echarts.init(statusLineChart.current);
    chartInstance.setOption(getOption(), true);

    const resizeListener = window.addEventListener('resize', () => {
      chartInstance.resize();
    });

    chartInstance.on('click', function (e) {
      // console.log('e', e);
      const nameList = ['策略01', '策略02', '策略03'];
      console.log(nameList.includes(e.name));
      if (nameList.includes(e.name) && chartData.onClickCeLue) {
        chartData.onClickCeLue(e.data);
      }
    });

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [chartData]);

  return <div ref={statusLineChart} className={className} style={{ width: '100%', height: '350px', ...style }} />;
}
