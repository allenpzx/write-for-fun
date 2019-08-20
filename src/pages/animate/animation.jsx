import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import styles from "./animation.module.css";

const baseUrl = `https://cnodejs.org/api/v1`;

@withRouter
class Animation extends React.Component {
  state = {
    list: []
  };

  getList = () => {
    fetch(`${baseUrl}/topics`)
      .then(res => res.json())
      .then(res => this.setState({ list: res.data }));
  };

  handleDetail = (e: Object) => {
    const { id } = e.target.dataset;
    if (!id) return;
    this.setState(prev => ({
      list: prev.list.map(v =>
        v.id === id
          ? { ...v, displayDetail: v.displayDetail ? false : true }
          : v
      )
    }));
  };

  render() {
    const { list } = this.state;
    console.log('props: ', this.props);
    
    return (
      <div>
        <Button onClick={this.getList}>get list</Button>
        <p className={styles.colorR}>ceshi</p>
        <ul onClick={this.handleDetail}>
          {list.map(v => (
            <li key={v.title}>
              <a data-id={v.id}>{v.title}</a>
              {v.displayDetail && (
                <div
                  style={{
                    boxSizing: "border-box",
                    padding: "1rem",
                    width: "100%",
                    height: "auto",
                    overflowY: "scroll"
                  }}
                >
                  <p dangerouslySetInnerHTML={{ __html: v.content }} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Animation;
