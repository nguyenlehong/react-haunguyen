import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

// TodoFeature.propTypes = {};

const TodoFeature = (props) => {
  const todoListt = [
    {
      id: 1,
      title: "eat",
    },
    {
      id: 2,
      title: "sleep",
    },
    {
      id: 3,
      title: "code",
    },
  ];
  return (
    <div>
      <h3>Todo list</h3>
      <TodoList todoList={todoListt} />
    </div>
  );
};

export default TodoFeature;
