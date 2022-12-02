import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
const ListPage = (props) => {
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
  const location = useLocation();
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterlist, setFilerlist] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(">>> parram", params);
    return params.status || "all";
  });
  useEffect(() => {
    const parmas = queryString.parse(location.search);
    setFilerlist(parmas.stutus || "all");
  }, [location.search]);
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
    const queryParams = { status: "all" };
    navigate({
      pathname: "/new-todo/listpage",
      search: queryString.stringify(queryParams),
    });
  };
  const shownew = () => {
    setFilerlist("new");
    const queryParams = { status: "new" };
    navigate({
      pathname: "/new-todo/listpage",
      search: queryString.stringify(queryParams),
    });
  };
  const showold = () => {
    setFilerlist("completed");
    const queryParams = { status: "completed" };
    navigate({
      pathname: "/new-todo/listpage",
      search: queryString.stringify(queryParams),
    });
  };
  const loc = useMemo(() => {
    return todoList.filter(
      (a) => filterlist === "all" || filterlist === a.status
    );
  }, [todoList, filterlist]);
  // const handleTodoFormSubmit = (values) => {
  //   console.log(">>>form submit: ", values);
  // };
  return (
    <div>
      <h2> What to do</h2>
      {/* <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm> */}
      <h3>Todo list w</h3>
      <TodoList todoList={loc} onTodoClick={handleTodoClick} />
      <button onClick={showall}> show all</button>
      <button onClick={shownew}> show new</button>
      <button onClick={showold}> show old</button>
    </div>
  );
};

export default ListPage;
