import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

import "./App.css";
import DetailPage from "./features/Todo/pages/DetaillPage";
import ListPage from "./features/Todo/pages/ListPage";
import productApi from "./api/productApi";
function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="App">
        <h2>Home </h2>
        <h3>
          <Link to="new-todo"> Todo</Link> | <Link to="new-album">Album</Link>
        </h3>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
