import { Link, Outlet } from "react-router-dom";
import React from "react";
import DetailPage from "./pages/DetaillPage";
import ListPage from "./pages/ListPage";
const TodoFeature = (props) => {
  return (
    <>
      <div>
        <h3> todo feature index</h3>
        <Link to="listpage"> List page</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default TodoFeature;
