/*
 * Author  hailie.pan
 * Date  2023-10-12 16:00:50
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-16 14:59:00
 * Description  file content
 */
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "antd";

export default function Pending() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <p> 发票2详情页 </p>
      <Button
        type="link"
        onClick={() => {
          navigate("/invoices/invoicesDetail/1?a=a&b=b");
        }}
      >
        跳转发票1
      </Button>

      <p>页面跳转时获取?号后面的参数：{searchParams.get("fromPage")}</p>
    </div>
  );
}
