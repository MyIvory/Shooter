import { Descriptions, Modal, Table } from "antd";
import React, { useState } from "react";

const SourcesModal = (props) => {
  const columns = [
    {
      title: props.titles.sources,
      dataIndex: "site",
      key: "site",
    },
    {
      title: props.titles.author,
      dataIndex: "author",
      key: "author",
    },
  ];

  const data = typeof props.sources==="object"? props.sources.reduce((acum, item, index) => {
    acum[index] = {
      key: index,
      site: item.site,
      author: item.author,
    };
    return acum
  }, []):[]
  return Modal.info({
    title:<div style={{textAlign:"center",fontSize:20}}>{props.titles.title.toUpperCase()}</div>,
    width: window.screen.width < 600 ? "100%" : 700,
    content: <Table columns={columns} dataSource={data} />,
    onOk: () => console.log("OK"),
  });
};

export default SourcesModal;
