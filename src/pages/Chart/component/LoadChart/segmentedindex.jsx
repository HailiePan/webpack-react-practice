/*
 * @Author: Hailie.Pan
 * @Date: 2023-12-27 13:48:54
 * LastEditors  Murphy.xie
 * LastEditTime  2024-02-04 10:37:51
 * @Description: 台区负荷情况折线图 <分段显示>
 */
import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import * as echarts from 'echarts';

const textColor = '#fff';
const tooltipBackgroundColor = '#2b4a78'; // tooltip背景色

const YaxisLineColor = '#0092ff'; //Y轴轴线的颜色
const YaxisTickColor = '#7bc8ff'; //Y轴刻度的颜色
const YaxisLabelColor = '#fff'; //Y轴文字的颜色

const XaxisLineColor = '#0092ff'; //X轴轴线的颜色
const XaxisTickColor = '#7bc8ff'; //X轴刻度的颜色
const XaxisLabelColor = '#fff'; //X轴文字的颜色

const LoadSplitChart = forwardRef(
  ({ title, chartData, style, className, splitNodes = [] }, ref) => {
    //
    const statusLineChart = useRef();
    //
    // X轴 和 Y轴 数据
    const [dataSouce, setDataSource] = useState({
      x: [],
      y: [[]],
      splitIndex: undefined
    });
    // 当前页数
    const currentStepRef = useRef(0);
    // 图表引用
    const chartRef = useRef();
    //
    useImperativeHandle(ref, () => ({
      next: nextStep
    }));

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
                  color: 'rgba(0, 146, 255, 0.8)'
                },
                {
                  offset: 0.8,
                  color: 'rgba(0, 146, 255, 0)'
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgba(0, 146, 255, 1)',
            // color: 'red',
            borderColor: 'rgba(219,50,51,0.2)',
            borderWidth: 12
          }
        }
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
                  color: 'rgba(255, 255, 255, 0.8)'
                },
                {
                  offset: 0.8,
                  color: 'rgba(255, 255, 255, 0)'
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: '#fff',
            borderColor: 'rgba(137,189,2,0.27)',
            borderWidth: 12
          }
        }
      }
    ];

    const getOption = () => {
      const series = dataSouce.y.map((item, index) => ({
        data: item, // 是一个数组
        ...nameConfig[index],
        yAxisIndex: index,
        name: chartData.nameList && chartData.nameList[index],
        symbolSize: 5,
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 4
          }
        },
        markLine: chartData.markLine
      }));
      //
      if (chartData.effectScatter) {
        // 如果需要切割数据
        if (dataSouce.splitIndex) {
          const effectScatter = {
            ...chartData.effectScatter,
            data: chartData.effectScatter.data?.filter(
              (item) => parseInt(item.value[0]) < dataSouce.splitIndex
            )
          };
          series.push(effectScatter);
        } else {
          series.push(chartData.effectScatter);
        }
      }
      console.log(' series xxxx', series);
      const defaultYAxis = {
        type: 'value',
        name: '单位:kW',
        nameGap: 20,
        nameTextStyle: {
          fontSize: 18,
          color: YaxisLabelColor
        },
        axisLine: {
          show: true,
          // 坐标轴轴线的颜色
          lineStyle: {
            color: YaxisLineColor
          }
        },
        axisTick: {
          show: true,
          length: 4,
          // 刻度线的颜色
          lineStyle: {
            width: 4,
            color: YaxisTickColor
          }
        },

        axisLabel: {
          interval: 0,
          textStyle: {
            color: YaxisLabelColor
          },
          // 默认y轴字体大小
          fontSize: 20,
          // margin:文字到y轴的距离
          margin: 10
        },

        splitLine: {
          show: false
        }
      };

      const yAxis = chartData?.yAxis
        ? chartData?.yAxis.map((item) => ({
            ...defaultYAxis,
            ...item
          }))
        : defaultYAxis;

      console.log(' chartData ', chartData);

      return {
        title: {
          text: title,
          textStyle: {
            color: textColor,
            fontSize: 14,
            fontWeight: 700
          },
          left: 'left',
          top: '2%'
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
            fontSize: 18
          }
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: tooltipBackgroundColor,
          textStyle: {
            color: textColor
          },
          padding: [10, 10]
        },
        grid: {
          left: '10px',
          right: '0',
          top: '40px',
          bottom: '0',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisLine: {
            // 坐标轴轴线的颜色
            lineStyle: {
              color: XaxisLineColor
            }
          },
          axisTick: {
            show: true,
            length: 4,
            // 刻度线的颜色
            lineStyle: {
              width: 4,
              color: XaxisTickColor
            },
            alignWithLabel: true
          },
          axisLabel: {
            interval: chartData.interval || 1,
            textStyle: {
              color: XaxisLabelColor
            },
            // 默认x轴字体大小
            fontSize: 20,
            // margin:文字到x轴的距离
            margin: 10
          },
          // 坐标轴两边留白策略
          boundaryGap: ['20%', '20%'],
          // data: dataSouce.x,
          data: chartData.xAxisData
        },
        yAxis: yAxis,
        series: series,
        // animationDelay: 3*1000,
        animationDuration: 4 * 1000,
        animationDurationUpdate: 6 * 1000
      };
    };

    useEffect(() => {
      const chartInstance = echarts.init(statusLineChart.current);
      chartRef.current = chartInstance;

      const resizeO = new ResizeObserver(() => {
        chartInstance.resize();
      });
      resizeO.observe(statusLineChart.current);
      return () => {
        resizeO.disconnect();
        chartInstance.clear();
        chartRef.current = null;
      };
    }, []);

    useEffect(() => {
      const chartOption = getOption();
      // console.log(' 图表配置 ', chartOption);
      chartRef.current.setOption(chartOption, true);
    }, [dataSouce]);

    // 进入下一步处理
    const nextStep = () => {
      const splitIndex = splitNodes[currentStepRef.current];
      const list = [];
      chartData.seriesData?.forEach((e) => {
        if (splitIndex) {
          list.push(e.slice(0, splitIndex));
        } else {
          // 全部数据
          list.push(e.slice(0));
        }
      });
      setDataSource({
        x: chartData.xAxisData?.slice(0, splitIndex),
        y: list,
        splitIndex
      });
      console.log(' 播放下一段动画处理 ', splitIndex, list);
      if (splitIndex) {
        currentStepRef.current += 1;
      }
    };

    // useEffect(()=>{
    //   console.log(' 数据处理 ', chartData, splitNodes);
    //   if (Object.keys(chartData).length > 0) {
    //     splitNodes.forEach((_, index)=>{
    //       setTimeout(() => {
    //         nextSplit();
    //       }, (10 + 5*index) * 1000);
    //     });
    //   }
    // }, [chartData]);

    return (
      <div
        ref={statusLineChart}
        className={className}
        style={{ width: '100%', height: '350px', ...style }}
      />
    );
  }
);

export default LoadSplitChart;
