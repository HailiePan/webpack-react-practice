/*
 * Author  hailie.pan
 * Date  2023-10-08 14:37:31
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-09 11:11:47
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
      <SearchInput
        selectValue={selectValue}
        onSelectChange={(value) => setSelectValue(value)}
      />
      <EquipInfo count={count} testValue={testValue} />
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
