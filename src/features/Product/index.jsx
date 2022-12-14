import ListPage from "features/Todo/pages/ListPage";
import React from "react";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";

const ProductFeature = () => {
  const path = useLocation();
  return (
    <>
      <div>
        ProductFeature
        <Link to="listpagee">List Pagee</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default ProductFeature;
