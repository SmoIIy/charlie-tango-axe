"use client";

import "../../app/globals.css";
import { redirect } from "next/navigation";
import React from "react";
import { Card, List, ConfigProvider } from "antd";

const data = [
  {
    title: "Title 1",
    content: "test",
  },
  {
    title: "Title 2",
    content: "test",
  },
  {
    title: "Title 3",
    content: "test",
  },
  {
    title: "Title 4",
    content: "test",
  },
  {
    title: "Title 5",
    content: "test",
  },
  {
    title: "Title 6",
    content: "test",
  },
  {
    title: "Title 7",
    content: "test",
  },
  {
    title: "Title 8",
    content: "test",
  },
  {
    title: "Title 9",
    content: "test",
  },
  {
    title: "Title 10",
    content: "test",
  },
  {
    title: "Title 11",
    content: "test",
  },
  {
    title: "Title 12",
    content: "test",
  },
  {
    title: "Title 13",
    content: "test",
  },
  {
    title: "Title 14",
    content: "test",
  },
  {
    title: "Title 15",
    content: "test",
  },
];
const App = () => (
  <List
    grid={{
      gutter: 24,
      column: 4,
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2,
      xl: 2,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <a href="x" target="blank_">
          <Card title={item.title} content={item.content}>
            {item.content}
          </Card>
        </a>
      </List.Item>
    )}
  />
);
export default App;
