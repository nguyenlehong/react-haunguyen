import React, { useEffect } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

import "./App.css";
import DetailPage from "./features/Todo/pages/DetaillPage";
import ListPage from "./features/Todo/pages/ListPage";
import productApi from "./api/productApi";
import Header from "components/Header";
import { useSnackbar } from "notistack";
import { Home } from "@mui/icons-material";
import CounterFeature from "features/Counter";
import ProductFeature from "features/Product";
import ProListPage from "features/Product/pages/ProListPage";
import NotFound from "components/NotFound";
function App() {
  const { enqueueSnackbar } = useSnackbar();
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
  const shownoti = () => {
    enqueueSnackbar("asdf", { variant: "success" });
  };
  return (
    <div className="App">
      <Header></Header>

      {/* <button onClick={shownoti}>show note</button> */}
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="new-todo" element={<TodoFeature />}>
          <Route path="listpage" element={<ListPage />}>
            {" "}
          </Route>
        </Route>
        <Route path="new-album" element={<AlbumFeature />} />
        <Route path="counter" element={<CounterFeature />}></Route>
        <Route path="products" element={<ProductFeature />}>
          <Route path="listpage" element={<ProListPage />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
