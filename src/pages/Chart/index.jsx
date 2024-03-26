/*
 * @Author: Hailie.Pan
 * @Date: 2023-11-17 10:32:24
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-02-05 15:12:16
 * @Description:
 */

import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';
import api from '@/services';
import ChartOne from './component/ChartOne';
import ChartTwo from './component/ChartTwo';
import LoadSplitChart from './component/LoadChart/segmentedindex';
import styles from './index.less';

export default function Chart() {
  const title = '传感器数据';
  const yAxisName = '单位:度';
  const chartData = {
    xAxisData: [
      '2023-01',
      '2023-02',
      '2023-03',
      '2023-04',
      '2023-05',
      '2023-06',
      '2023-07',
      '2023-08'
    ],
    seriesData: [
      {
        name: '测点数据',
        data: [10, 20, 30, 40, 30, 20, 10, 10],
        color: '#60cffa',
        areaColor: ['rgba(96, 207, 250,0.8)', 'rgba(96, 207, 250,0.2)']
      },
      {
        name: '测点预测数据',
        data: [8, 22, 34, 45, 36, 22, 9, 14],
        color: '#fff',
        areaColor: ['rgba(255, 255, 255,0.8)', 'rgba(255, 255, 255,0.2)']
      }
    ]
  };

  // 变压器负载率 引用
  const fuzailvChartRef = useRef();
  // 变压器数据
  const [bianyaqiData, setBianYaQiData] = useState({ xAxisData: [], seriesData: [] });

  // 获取台区负荷等其他情况
  const getOtherEchartsData = async () => {
    // setChartLoading(true);
    const res = await api.guangchu.fetchAllChartData();

    // 变压器反向负载率
    setBianYaQiData({
      xAxisData: res.data.time,
      seriesData: [res.data.byqfuzailv],
      nameList: ['变压器负载率'],
      yAxis: [{ name: '单位:%', max: 100 }],
      markLine: { data: [{ yAxis: 80, lineStyle: { color: 'red', width: 2, type: 'dashed' } }] },
      // 配置闪烁的点
      effectScatter: {
        type: 'effectScatter',
        coordinateSystem: 'cartesian2d',
        symbol: 'circle',
        symbolSize: 26,
        showEffectOn: 'render', // 何时显示特效:'render'-绘制完成后显示特效 'emphasis'-高亮（hover）的时候显示特效
        // 涟漪特效配置
        rippleEffect: {
          // 波纹的绘制方式,可选'stroke'和'fill'
          brushType: 'stroke'
        },
        itemStyle: {
          normal: {
            color: '#fff',
            shadowBlur: 30,
            shadowColor: '#fff'
          }
        },
        zlevel: 1,
        data: [
          {
            name: '逻辑01',
            value: ['11', '85'],
            label: {
              show: true,
              // formatter: () => '逻辑01',
              formatter: () => '',
              position: 'top',
              distance: 20,
              color: '#ffff00',
              fontSize: '24'
            },
            itemStyle: {
              color: '#ffff00'
            }
          },
          {
            name: '逻辑02',
            value: ['12', '83'],
            label: {
              show: true,
              formatter: () => '',
              position: 'top',
              distance: 20,
              color: '#ff7b00',
              fontSize: '24'
            },
            itemStyle: {
              color: '#ff7b00'
            }
          },
          {
            name: '逻辑03',
            value: ['15', '60'],
            label: {
              show: true,
              formatter: () => '',
              position: 'top',
              distance: 20,
              color: 'rgb(59,253,133)',
              fontSize: '24'
            },
            itemStyle: {
              color: 'rgb(59,253,133)'
            }
          }
        ]
      },
      // 点击策略的点
      onClickCeLue: (paramer) => {
        console.log('paramer', paramer);
      }
    });

    // 执行图表分割
    nextChartStep();
  };

  useEffect(() => {
    // 获取数据
    getOtherEchartsData();
  }, []);

  // 执行图表下一步
  const nextChartStep = () => {
    fuzailvChartRef.current?.next();
  };

  const chartSplitNodes = [12, 13, 16, 17, 19];
  const chartHeight = 480;
  return (
    <div className={styles.wrap}>
      <ul>
        解决的问题：
        <li>echarts表格随着屏幕尺寸变化而自适应</li>
        <li>window.onresize，多个表格时，后一个会覆盖前一个，只有最后一个会自适应</li>
        <li>使用window.addEventListener避免监听被覆盖</li>
        <li>new ResizeObserver的使用</li>
      </ul>
      <div style={{ marginBottom: '20px', display: 'flex' }}>
        <ChartOne
          title={title}
          chartData={chartData}
          style={{
            width: '500px',
            height: '300px',
            marginRight: '20px',
            backgroundColor: 'rgb(44, 43, 64)'
          }}
        />

        <ChartTwo
          title={title}
          chartData={chartData}
          style={{
            width: '500px',
            height: '300px',
            backgroundColor: 'rgb(23, 48, 89)'
          }}
        />
      </div>
      <Button onClick={() => nextChartStep()}>按钮1</Button>
      <Button onClick={() => nextChartStep()}>按钮2</Button>
      <Button onClick={() => nextChartStep()}>按钮3</Button>
      <Button onClick={() => nextChartStep()}>按钮4</Button>
      <Button onClick={() => nextChartStep()}>按钮5</Button>

      <div style={{ padding: '20px', width: '800px', backgroundColor: 'rgb(23, 48, 89)' }}>
        <LoadSplitChart
          ref={fuzailvChartRef}
          chartData={bianyaqiData}
          splitNodes={chartSplitNodes}
          style={{ height: `${chartHeight}px` }}
        />
      </div>
    </div>
  );
}
