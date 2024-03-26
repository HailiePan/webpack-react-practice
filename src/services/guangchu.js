/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-02 17:43:01
 * LastEditors  Murphy.xie
 * LastEditTime  2024-02-03 10:56:39
 * @Description:
 */

// 所有折线图数据
export function fetchAllChartData() {
  return Promise.resolve({
    status: 'SUCCESS',
    msg: '请求成功',
    code: '100000',
    data: {
      byqfuzailv: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        0,
        60,
        85,
        83,
        80,
        78,
        60,
        50,
        0,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      guangfufadian: [
        null,
        null,
        null,
        null,
        null,
        null,
        0,
        84,
        160,
        300,
        441,
        525,
        579.6,
        600,
        580,
        500,
        400,
        260,
        100,
        0,
        null,
        null,
        null,
        null,
        null,
      ],
      chongdianzhuang: [
        21, 21, 14, 14, 14, 14, 14, 14, 42, 5.8, 6.5, 6.8, 5.9, 5.8, 5.8, 6.3, 6.5, 6.5, 6.5, 6.6, 5, 4.5, 4.5, 4.5, 5,
      ],
      yonghufuhe: [
        20, 21, 22, 23, 24, 25, 50, 90, 160, 200, 180, 180, 220, 200, 108, 90, 0, 0, 200, 250, 300, 260, 180, 100, 80,
      ],
      nibianqi: [
        null,
        null,
        null,
        null,
        null,
        null,
        0,
        80,
        140,
        250,
        420,
        500,
        552,
        500,
        500,
        330,
        0,
        0,
        50,
        0,
        null,
        null,
        null,
        null,
        null,
      ],
      time: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    },
  });
  // return request.get(`/district/getAllData`);
}


