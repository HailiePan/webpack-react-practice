/*
 * @Author: Hailie.Pan
 * @Date: 2023-11-28 10:02:42
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-03-08 09:43:14
 * @Description:
 */
/*
 * Author  hailie.pan
 * Date  2023-10-07 17:17:04
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-28 10:02:23
 * Description  file content
 */
import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import styles from './home.less';

import coff from '@/assets/images/zz.png';
import coffee from '@/assets/images/coffee.jpg';
import { OCClientSDK, OCSDKMethodType } from '../utils/OCSDK';

const Home = () => {
  let location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const sdk = new OCClientSDK('player', {
      url: 'http://10.2.30.185:5173'
    });
    sdk.onLoad(() => {
      console.log('嵌入页面加载完成');
    });

    setTimeout(() => {
      console.log('嵌入页面加载完成');
      sdk.invoke(OCSDKMethodType.ChangeStation, '1705576338997', (e) => {
        console.log('执行完毕', e);
      });
    }, 2000);

    return () => {
      sdk.destory();
    };
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      // fetchList();
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const fetchList = async () => {
    const res = await api.home.fetchList({
      appName: '',
      current: 1,
      pageSize: 10
    });
  };

  return (
    <div className={styles?.wrapper} id="player" style={{ border: '1px solid red' }}>
      <p>home页面</p>

      <ul>
        解决的问题：
        {/* <li>获取路径上?号后的参数；</li>
        <li>获取NavLink中state的参数；</li> */}
        <li>
          flex布局，项目的缩小放大比例：
          <br />
          flex-shrink为1，如果空间不足，项目将缩小；
          <br />
          flex-grow为1，如果存在剩余空间，项目将放大
        </li>
        <li>使用特定字体样式;</li>
        <li>加载图片</li>
      </ul>

      {/* <p>页面跳转时获取state里的参数{location.state}</p>
      <p>页面跳转时获取?号后面的参数{searchParams.get("fromPage")}</p> */}

      <div className={styles.box}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
      <p className={styles.fontStyle}>使用字体样式</p>
      <div className={styles.showImg}>
        <img src={coff} alt="" />
        <img src={coffee} alt="" />
      </div>
    </div>
  );
};

export default Home;
