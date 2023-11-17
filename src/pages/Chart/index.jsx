/*
 * Author  hailie.pan
 * Date  2023-11-16 14:01:56
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-17 10:31:59
 * Description  echarts图表根据窗口变化而自适应
 */
import React, { useRef, useEffect } from "react";
import ChartOne from "./component/ChartOne";
import ChartTwo from "./component/ChartTwo";

import styles from "./index.less";

export default function Chart() {
  const title = "传感器数据";
  const yAxisName = "单位:度";
  const chartData = {
    xAxisData: [
      "2023-01",
      "2023-02",
      "2023-03",
      "2023-04",
      "2023-05",
      "2023-06",
      "2023-07",
      "2023-08",
    ],
    seriesData: [
      {
        name: "测点数据",
        data: [10, 20, 30, 40, 30, 20, 10, 10],
        color: "#60cffa",
        areaColor: ["rgba(96, 207, 250,0.8)", "rgba(96, 207, 250,0.2)"],
      },
      {
        name: "测点预测数据",
        data: [8, 22, 34, 45, 36, 22, 9, 14],
        color: "#fff",
        areaColor: ["rgba(255, 255, 255,0.8)", "rgba(255, 255, 255,0.2)"],
      },
    ],
  };

  return (
    <div className={styles.wrap}>
      <ul>
        解决的问题：
        <li>echarts表格随着屏幕尺寸变化而自适应</li>
        <li>
          window.onresize，多个表格时，后一个会覆盖前一个，只有最后一个会自适应
        </li>
        <li>使用window.addEventListener避免监听被覆盖</li>
        <li>new ResizeObserver的使用</li>
      </ul>
      <div style={{ marginBottom: "20px" }}>
        <ChartOne
          title={title}
          chartData={chartData}
          style={{ height: "300px", backgroundColor: "rgb(44, 43, 64)" }}
        />
      </div>
      <ChartTwo
        title={title}
        chartData={chartData}
        style={{ height: "300px", backgroundColor: "rgb(44, 43, 64)" }}
      />
    </div>
  );
}
