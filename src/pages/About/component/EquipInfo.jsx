/*
 * Author  hailie.pan
 * Date  2023-11-08 16:03:26
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-09 14:16:58
 * Description 使用父组件传入的值
 */
import React, { useEffect, useState } from "react";
import { Input } from "antd";

export default function EquipInfo(props) {
  const { count, testValue } = props;

  // 父组件传入的值是异步的，内部组件要使用传入的值作为默认值，并且存储为内部变量
  const [testShowValue, setTestShowValue] = useState(testValue); // 直接这样写不行 props改变时state的值不会改变

  //监听父组件传入的值变化时，存储为内部值
  useEffect(() => {
    setTestShowValue(testValue);
  }, [testValue]);

  console.log("testShowValue", testShowValue);

  // 只展示props传入的值，不用监听，也不用存，props改变时展示的值就会改变
  // count

  return (
    <div>
      <p>数量：{count}</p>
      <Input
        style={{ width: "200px" }}
        value={testShowValue}
        onChange={(e) => {
          setTestShowValue(e.target.value);
        }}
      />
    </div>
  );
}
