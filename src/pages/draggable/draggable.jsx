import React from "react";
import { Card, Button } from "antd";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import ShuffleAnimate from 'shuffle-animate';
import "./draggable.css";

const SortableItem = sortableElement(({ value }) => (
  <div className={`card card${value.id}`}>{value.data}</div>
));

const SortableContainer = sortableContainer(({ children }) => (
  <div className="container">{children}</div>
));

function arrayMove(array, oldIndex, newIndex) {
  [array[oldIndex], array[newIndex]] = [array[newIndex], array[oldIndex]];
  return array;
}

export default class Draggable extends React.Component {
  state = {
    list: [
      { id: 1, data: "1 data" },
      { id: 2, data: "2 data" },
      { id: 3, data: "3 data" },
      { id: 4, data: "4 data" }
    ]
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ list }) => ({
      list: arrayMove(list, oldIndex, newIndex)
    }));
  };

  random = e => {
    const container = document.getElementsByClassName('container')[0];
    const sa = new ShuffleAnimate({data: [...container.children]});
    sa.update({ ease: 'easeInOutCirc', time: '1000ms' });
  }

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
    console.log(list);
    return (
      <Card className="draggable">
        <SortableContainer ref={current=>this.container=current} onSortEnd={this.onSortEnd}>
          {list.map((value, index) => (
            <SortableItem
              key={`item-${index}`}
              index={index}
              value={value}
            />
          ))}
        </SortableContainer>
        <Button onClick={this.random}>random</Button>
      </Card>
    );
  }
}
