import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";
import "./List.css";

export default class List extends Component {
  // 对接收的props进行类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
  };
  render() {
    const { todos, updateTodo, deleteTask } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          //   return <Item todo={todo} key={todo.id}/>
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTask={deleteTask}
            />
          );
        })}
      </ul>
    );
  }
}
