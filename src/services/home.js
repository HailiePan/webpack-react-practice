/*
 * Author  hailie.pan
 * Date  2023-10-18 16:14:12
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-18 17:18:14
 * Description  file content
 */
import request from "@/utils/request";

/**
 * 请求列表数据
 * @param {*} params 分页相关参数
 */
export function fetchList(params = {}) {
  return request.get(`/appStore/queryList`, { params });
}
