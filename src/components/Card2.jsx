// Card2.js
"use client";

import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

export default function Card2({ children }) {
  const panelStyle = {
    marginBottom: 24,
    background: "white",
    borderRadius: "24px",
    border: "none",
  };

  return (
    <Collapse bordered={false} defaultActiveKey={["0"]} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} style={{ background: "black" }}>
      <Collapse.Panel key="1" header="Lorem Ipsum" style={panelStyle}>
        {children}
      </Collapse.Panel>
    </Collapse>
  );
}
