import { Box } from "@mui/system";
import React from "react";
import FilterByCategory from "./Filters/FilterByCategory";

const ProductFilters = (filters, onChange) => {
  const handleCategoryChange = (newCategoryChangId) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      "category.id": newCategoryChangId,
    };
    onChange(newFilters);
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
    </Box>
  );
};

export default ProductFilters;
