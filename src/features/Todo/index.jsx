import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

// TodoFeature.propTypes = {};

const TodoFeature = (props) => {
  const initTodoList = [
    {
      id: 1,
      title: "eat",
      status: "new",
    },
    {
      id: 2,
      title: "sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "code",
      status: "new",
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterlist, setFilerlist] = useState("new");
  const handleTodoClick = (todo, idx) => {
    // console.log(">>> todo", todo);
    // console.log(">>> idx", idx);
    // clone current array to the new array
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    // newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };
  const showall = () => {
    setFilerlist("all");
  };
  const shownew = () => {
    setFilerlist("new");
  };
  const showold = () => {
    setFilerlist("completed");
  };
  const loc = todoList.filter(
    (a) => filterlist === "all" || filterlist === a.status
  );
  return (
    <div>
      <h3>Todo list</h3>
      <TodoList todoList={loc} onTodoClick={handleTodoClick} />
      <button onClick={showall}> show all</button>
      <button onClick={shownew}> show new</button>
      <button onClick={showold}> show old</button>
    </div>
  );
};

export default TodoFeature;
