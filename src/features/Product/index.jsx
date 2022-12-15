import { Box } from "@mui/material";
import ListPage from "features/Todo/pages/ListPage";
import React from "react";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import ProListPage from "./pages/ProListPage";

const ProductFeature = () => {
  return (
    <Box pt={3}>
      <Outlet></Outlet>
    </Box>
  );
};

export default ProductFeature;
