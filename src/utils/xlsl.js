/*
 * Author  hailie.pan
 * Date  2023-11-28 11:22:09
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-28 13:46:38
 * Description  file content
 */
import * as XLSX from "xlsx";
import request from "axios";
/**
 * 获取excel数据信息
 * @param {*} aFilePath 本地地址
 * @param {*} aWorkSheets 一组表名
 * @returns
 */
const importExcel = (aFilePath = "", aWorkSheets = []) => {
  console.log("aFilePath", aFilePath);
  const filePath = aFilePath;
  return request.get(filePath, { responseType: "arraybuffer" }).then((res) => {
    const webbook = XLSX.read(res.data, { type: "array" });
    // console.log(' 所有的表名 ', webbook);
    let workSheets = aWorkSheets;
    if (workSheets.length === 0) {
      workSheets = webbook.SheetNames;
    }
    const dict = {};
    for (let index = 0; index < workSheets.length; index += 1) {
      const sheetName = workSheets[index];
      const workSheet = webbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(workSheet);
      dict[sheetName] = json;
    }
    return dict;
  });
};

export default {
  importExcel,
};
