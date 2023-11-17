/*
 * Author  hailie.pan
 * Date  2023-11-10 17:07:36
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-16 15:50:31
 * Description  memo\useMemo缓存子组件不更新
 */
import React, { useState, memo, useMemo } from "react";
import { Steps, Icon, Button } from "antd";
import LineChart from "./component/LineChart";

const Hello = memo(function Hello({ text }) {
  console.log("子组件重新渲染");
  return <h1>{`hello ${text}!`}</h1>;
});

export default function Article() {
  const stepsData = [
    {
      title: "软件版本检核",
      //   icon: <Icon type="download" />,
      status: "wait",
    },
    {
      title: "软压板校核",
      //   icon: <Icon type="check-square" />,
      status: "wait",
    },
    {
      title: "定值校核",
      //   icon: <Icon type="copy" />,
      status: "wait",
    },
    {
      title: "稳态同源比对",
      //   icon: <Icon type="sync" />,
      status: "wait",
    },
    {
      title: "不停电出口校核",
      //   icon: <Icon type="smile-o" />,
      status: "wait",
    },
  ];

  const [stepsStatus, setStepsStatus] = useState([
    "wait",
    "wait",
    "wait",
    "wait",
    "wait",
  ]);

  return (
    <div>
      <ul style={{ marginBottom: "20px" }}>
        解决的问题：
        <li>
          缓存子组件的参数，使子组件
          在父组件更新其他参数时不更新，减少性能消耗；
        </li>
      </ul>

      <Steps current={1}>
        {stepsData.map((item, index) => (
          <Steps.Step
            style={{ cursor: "pointer" }}
            key={item.title}
            status={stepsStatus[index]}
            title={item.title}
            onClick={() => {
              const arr = [...stepsStatus];
              arr[index] = "finish";
              setStepsStatus(arr);
            }}
          />
        ))}
      </Steps>

      <div
        style={{ flex: 1, borderBottom: "1px solid #2b4a78", padding: "10px" }}
      >
        <LineChart
          style={{ height: 200 }}
          title="装置软件状态检测"
          chartData={useMemo(
            () => ({
              leftYName: "CPU负荷率（%）",
              rightYName: "内存（%）",
              xAxisData: ["08-01", "08-02", "08-03", "08-04", "08-05", "08-06"],
              seriesData: [
                {
                  name: "CPU负荷率（%）",
                  data: [10, 10, 30, 12, 15, 3, 7],
                  color: "#9effff",
                },
                {
                  name: "内存（%）",
                  data: [50, 20, 70, 40, 50, 60, 10],
                  color: "rgb(255, 199, 58)",
                },
              ],
            }),
            []
          )}
        />
      </div>
    </div>
  );
}
