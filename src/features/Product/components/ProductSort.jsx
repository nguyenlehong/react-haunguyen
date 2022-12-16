import { Tab, Tabs } from "@mui/material";
import React from "react";

const ProductSort = ({ currentSort, onChange }) => {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disable tabs example"
    >
      <Tab label="gia cao -> thap" value="salePrice:ASC"></Tab>
      <Tab label="gia thap -> cao" value="salePrice:DESC"></Tab>
    </Tabs>
  );
};

export default ProductSort;
// https://www.gettainguyen.com/0:/Kh%C3%B3a%20H%E1%BB%8Dc/IT/ReactJS%20cho%20ng%C6%B0%E1%BB%9Di%20m%E1%BB%9Bi%20b%E1%BA%AFt%20%C4%91%E1%BA%A7u%202020/Xem%20Online/16.%20Shopping%20Cart%20-%20Trang%20danh%20s%C3%A1ch%20s%E1%BA%A3n%20ph%E1%BA%A9m/12.%20S%E1%BA%AFp%20x%E1%BA%BFp%2
// 0theo%20gi%C3%A1%20s%E1%BA%A3n%20ph%E1%BA%A9m.mp4?a=view
