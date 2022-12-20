import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import categoryApi from "api/categoryApi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FilterByCategory = ({ onChange }) => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log("loi category", error);
      }
    })();
  }, []);
  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };
  return (
    <Box>
      <Typography> Danh muc san pham</Typography>
      <ul>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            {" "}
            {category.name}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default FilterByCategory;
