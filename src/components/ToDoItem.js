import React from 'react';
import '../Todo.css';

const ToDoItem = (props) => {

  const Completedstyle = {
    fontSize:"italics",
    color:"#cdcdcd",
    textDecoration:"line-through"
  }

  return (
    <div className="todo">
    <input type="checkbox"
    value={props.item.completed}
    checked={props.item.completed}
    onChange = {() => props.handleChange(props.item.id)}

    />
    <p style={props.item.completed ? Completedstyle:null}>{props.item.text}</p>
    </div>
  )
}

export default ToDoItem
