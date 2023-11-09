/*
 * Author  hailie.pan
 * Date  2023-11-08 10:31:10
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-09 11:03:45
 * Description  封装可控组件
 */
import React, { useState, useEffect } from "react";
import { Select } from "antd";

export default function SearchInput(props) {
  const { selectValue, onSelectChange = () => {}, testValue } = props;

  return (
    <Select
      style={{ width: "200px" }}
      value={selectValue}
      onSelect={(value) => {
        onSelectChange(value);
      }}
    >
      <Option value="zhangsan" key="1">
        张三
      </Option>
      <Option value="lisi" key="2">
        李四
      </Option>
      <Option value="wangwu" key="2">
        王五
      </Option>
    </Select>
  );
}
