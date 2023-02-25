import { Descriptions, Modal, Table } from "antd";
import React, { useState } from "react";

const SourcesModal = (props) => {
  console.log(props);
  const columns = [
    {
      title: "Site",
      dataIndex: "site",
      key: "site",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
  ];

  const data = props.sources.reduce((acum, item, index) => {
    console.log(item)
   acum[index] = {
      key: index,
      site: item.site,
      author: item.author,
    };
    return acum
  }, []);
  console.log(data);
  return Modal.info({
    title: "Vertically centered modal dialog",
    width: window.screen.width<600?"100%":700,
    content: <Table columns={columns} dataSource={data} />,
    onOk: () => console.log("OK"),
  });
};

export default SourcesModal;
