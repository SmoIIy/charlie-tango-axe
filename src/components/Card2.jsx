// Card2.js
"use client";

import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

export default function Card2({ children, title }) {
  const panelStyle = {
    marginBottom: 24,
    background: "#333333",
    borderRadius: "8px",
    border: "none",
    colorBorder: "#ffffff", //virker ikke
    colorText: "#ffffff", //virker ikke
    colorTextHeading: "#ffffff", //virker ikke
    margin: 24,
  };

  return (
    <Collapse bordered={false} defaultActiveKey={["0"]} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} style={{ background: "0" }}>
      <Collapse.Panel key="1" header={title} style={panelStyle}>
        {children}
      </Collapse.Panel>
    </Collapse>
  );
}
