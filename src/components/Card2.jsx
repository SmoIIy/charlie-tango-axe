"use client";

import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";

export default function Card2({ children, title }) {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: "#333333",
    borderRadius: "8px",
    border: "none",
    margin: 24,
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["0"]}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: "0",
      }}
    >
      <Collapse.Panel key="1" header={title} style={panelStyle}>
        {children}
      </Collapse.Panel>
    </Collapse>
  );
}
