import React from "react";
import { Card } from "antd";
import "./draggable.css";

class Draggable extends React.Component {
  state = {
    list: [
      { id: 1, data: "1 data" },
      { id: 2, data: "2 data" },
      { id: 3, data: "3 data" },
      { id: 4, data: "4 data" }
    ],
    dragStart: null,
    dragEnter: null
  };

  onDragStart = index => e => {
    // console.log("onDragStart: ", index);
    this.setState({ dragStart: index });
  };

  onDrag = index => e => {
    // console.log('onDrag: ', index);
  }

  onDragEnd = index => async e => {
    // console.log("onDragEnd: ", index);
    this.setState({ dragStart: null, dragEnter: null })
  };

  onDragEnter = index => e => {
    // console.log("onDragEnter: ", index);
    this.setState({ dragEnter: index });
  };

  onDragOver = index => e => {
    // console.log('onDragOver: ', index);
  }

  onDragLeave = current => e => {
    // console.log('leave')
    const { dragStart, list } = this.state;
    if (dragStart === current) return;
    const startIndex = list.findIndex(i => i.id === dragStart);
    const currentIndex = list.findIndex(i => i.id === current);

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
    // const move = id => {
    //   console.log(dragStart, dragEnter)
    //   const dragStartIndex = list.findIndex(i=>i.id===dragStart);
    //   const dragEnterIndex = list.findIndex(i=>i.id===dragEnter);
    //   const index = list.findIndex(v=>v.id===id);
    //   if(dragEnter === dragStart) return {}
    //   const distanceY = parseFloat((dragEnter - index) * 100);
    //   console.log(distanceY)
    //   return { transform: `translateY(${distanceY})px`}
    // }
    return (
      <Card className="draggable">
        <div className="container">
          {list.map(item => (
            <div
              key={item.id}
              draggable
              {...gestureEvent(item.id)}
              className={`card card${item.id}`}
              // style={move(item.id)}
            >
              {item.data}
            </div>
          ))}
        </div>
      </Card>
    );
  }
}

export default Draggable;
