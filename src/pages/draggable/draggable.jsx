import React from "react";
import { Card } from "antd";
import "./draggable.css";

class Draggable extends React.Component {
  state = {
    list: [
      { id: 1, data: "1data" },
      { id: 1, data: "1data" },
      { id: 1, data: "1data" },
      { id: 1, data: "1data" }
    ],
    dragStart: null
  };

  onDragStart = index => e => {
    console.log("onDragStart: ", index);
    this.setState({ dragStart: index });
  };

  onDragEnd = index => e => {
    console.log("onDragEnd: ", index);
  };

  onDragEnter = index => e => {
    console.log("onDragEnter: ", index);
  };

  onDragLeave = current => e => {
    const { dragStart, list } = this.state;
    if (dragStart === current) return;
    const startIndex = list.findIndex(i => i === dragStart);
    const currentIndex = list.findIndex(i => i === current);

    [list[startIndex], list[currentIndex]] = [
      list[currentIndex],
      list[startIndex]
    ];
    this.setState({ list });
  };

  render() {
    const { list } = this.state;
    const gestureEvent = id => ({
      onDragStart: this.onDragStart(id),
      onDragEnd: this.onDragEnd(id),
      onDragEnter: this.onDragEnter(id),
      onDragLeave: this.onDragLeave(id)
    });
    return (
      <Card className="draggable">
        <div className="container">
          {list.map((item, i) => (
            <div
              key={item}
              draggable
              {...gestureEvent(item)}
              className={`card card${item}`}
            >
              {item}
            </div>
          ))}
        </div>
      </Card>
    );
  }
}

export default Draggable;
