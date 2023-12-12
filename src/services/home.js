/*
 * Author  hailie.pan
 * Date  2023-10-18 16:14:12
 * LastEditors  hailie.pan
 * LastEditTime  2023-12-05 10:31:41
 * Description  file content
 */
import request from '@/utils/request';
import XlsxTool from '@/utils/xlsl.js';

console.log('XlsxTool', XlsxTool);
/**
 * 请求列表数据
 * @param {*} params 分页相关参数
 */
export function fetchList(params = {}) {
  return request.get(`/appStore/queryList`, { params });
}

const getExcelData = () => {
  const filePath = '/public/file/devicePoint.xlsx';
  // const filePath = '/public/file/test.json';
  // const filePath = ;
  const sheetKey = 'object_gather_point';
  return XlsxTool.importExcel(filePath, [sheetKey]).then((res) => {
    console.log(' 本地的全部测点数据 ', res);
    const map = {};
    const dataList = res[sheetKey] || [];
    dataList.forEach((e) => {
      const key = `${e.id}`;
      const list = map[key] || [];
      list.push(e);
      map[key] = list;
    });
    return map;
  });
};

export function getDevicePoint() {
  return getExcelData().then((res = {}) => {
    console.log('res', res);
    return {
      status: 'SUCCESS',
      data: res
    };
  });
}
