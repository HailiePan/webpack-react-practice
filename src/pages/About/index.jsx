/*
 * Author  hailie.pan
 * Date  2023-10-08 14:37:31
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-16 16:20:29
 * Description  file content
 */
import React, { useState, useEffect } from "react";
import CommonBox from "@/components/CommonBox";
import SearchInput from "./component/SearchInput";
import EquipInfo from "./component/EquipInfo";

export default function About() {
  const [selectValue, setSelectValue] = useState("zhangsan");
  const [count, setCount] = useState(0);
  const [testValue, setTestValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSelectValue("lisi");
      setCount(1);
      setTestValue("你好");
    }, 1000);

    setTimeout(() => {
      setSelectValue("wangwu");
      setCount(2);
    }, 2000);
  }, []);

  return (
    <div>
      <ul>
        解决的问题：
        <li>封装仅展示父组件传入的数据的组件，无需存储和监听传入的数据；</li>
        <li>封装受控的下拉选择组件，</li>
        <li>快速封装带背景的组件；</li>
        <li>
          思考的问题：什么时候需要监听父组件传入的数据，传入的数据变化时做一些事情；
        </li>
      </ul>

      <EquipInfo count={count} testValue={testValue} />

      <SearchInput
        selectValue={selectValue}
        onSelectChange={(value) => setSelectValue(value)}
      />

      <CommonBox
        style={{ width: "640px", height: "500px", marginTop: "100px" }}
      >
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
      </CommonBox>
    </div>
  );
}
