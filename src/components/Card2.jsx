"use client"

import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
const text = "lorem ipsum";
const getItems = (panelStyle) => [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];
export default function Card2() {


  const panelStyle = {
    marginBottom: 24,
    background: "white",
    borderRadius: "24px",
    border: 'none',
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: "black",
      }}
      items={getItems(panelStyle)}
    />
  );
};
