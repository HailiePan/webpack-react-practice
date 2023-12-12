/*
 * Author  hailie.pan
 * Date  2023-11-28 10:14:47
 * LastEditors  hailie.pan
 * LastEditTime  2023-12-07 10:20:19
 * Description  file content
 */
import React, { useEffect, useContext } from 'react';
import InfoItem from './components/InfoItem';
import StateContext from '@/BaseLayout/data.js';
import { Button, message, Menu } from 'antd';

export default function Info() {
  const { state, setState } = useContext(StateContext);

  const fetchDevicePoint = async () => {
    const res = await api.home.getDevicePoint();
    console.log('res', res);
    if (res.status === 'SUCCESS') {
      message.success('操作成功');
    }
  };
  return (
    <div>
      <ul style={{ marginBottom: '20px' }}>
        解决的问题：
        <li>createContext()和useContext()的使用；</li>
        <li>createContext()创建上下文</li>
        <li>和useContext()读取上下文</li>
        <li>
          可以提供动态变化的值，无论层级多深都会看到传入的上下文的值，如果该值发生变化，Peact也会重新渲染读取该值的组件
        </li>
      </ul>

      <p>这是信息页面,获取状态{state}</p>
      <Button onClick={() => setState('mute')}>修改state为mute</Button>
      <Button onClick={() => setState('playing')}>修改state为playing</Button>
      <InfoItem />

      <Button onClick={() => fetchDevicePoint()}>获取xlsx文件</Button>

      <div>
        <Menu
          style={{
            color: '#333',
            width: '200px',
            height: '100%',
            fontSize: '20px',
            border: '2px solid red'
          }}
          mode="inline"
          items={[
            {
              label: '系统介绍',
              value: 'introduce',
              key: 'introduce'
            },
            {
              label: '参数设置',
              value: 'setting',
              key: 'setting'
            },
            {
              label: '案例演示',
              value: 'example',
              key: 'example',
              children: [
                {
                  label: '德宝直流',
                  value: 'debao',
                  key: 'debao',
                  stationId: 'debao',
                  stationName: '德宝站'
                },
                {
                  label: '大姜N-2',
                  value: 'dajiang',
                  key: 'dajiang',
                  stationId: 'debao',
                  stationName: '大姜站'
                },
                {
                  label: '宾金直流',
                  key: 'binjin',
                  value: 'binjin',
                  stationId: 'binjin',
                  stationName: '宾金站'
                },
                {
                  label: '康蜀N-2',
                  value: 'kangshu',
                  key: 'kangshu',
                  stationId: 'kangshu',
                  stationName: '康蜀站'
                }
              ]
            }
          ]}
        />
      </div>
    </div>
  );
}
