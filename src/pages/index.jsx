import React from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import routes from "../Routes.js";

export default class CateLog extends React.Component {
  render() {
    return (
      <List
        bordered
        style={{ width: "50vw" }}
        dataSource={routes}
        renderItem={v => {
          if (v.path) {
            return (
              <List.Item>
                <Link to={v.path}>{v.id}</Link>
              </List.Item>
            );
          }
          return <React.Fragment />;
        }}
      />
    );
  }
}
