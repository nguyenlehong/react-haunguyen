import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import NotFound from "./components/NotFound";
import ListPage from "./features/Todo/pages/ListPage";
import { Provider } from "react-redux";
import store from "./app/store";
import CounterFeature from "./features/Counter";
import Home from "components/Home";
import { SnackbarProvider } from "notistack";
import ProductFeature from "features/Product";
import ProListPage from "features/Product/pages/ProListPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
{
  /* <BrowserRouter>
<Routes>
  <Route path="/" element={<App></App>}>
    <Route path="/home" element={<Home />}></Route>
    <Route path="new-todo" element={<TodoFeature />}>
      <Route path="listpage" element={<ListPage />}>
        {" "}
      </Route>
    </Route>
    <Route path="new-album" element={<AlbumFeature />} />
    <Route path="counter" element={<CounterFeature />}></Route>
    <Route path="products" element={<ProductFeature />}>
      <Route path="listpagee" element={<ProListPage />} />
    </Route>
    <Route path="*" element={<NotFound />}></Route>
  </Route>
</Routes>
</BrowserRouter> */
}
