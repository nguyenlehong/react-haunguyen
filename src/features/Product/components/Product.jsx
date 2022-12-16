import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Skeleton, Typography } from "@mui/material";
import { STATIC_HOST } from "constants";
import { THUMBNAIL_PLACEHOLDER } from "constants/index";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `https://api.ezfrontend.com${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
  // ? `${STATIC_HOST}${product.thumbnail?.url}`
  return (
    <Box padding={1}>
      <Box padding={1} minHeight="215px">
        <img src={thumbnailUrl} alt={product.name} width="100%"></img>
      </Box>
      {/* <Skeleton variant="rect" width="100%" height={118} /> */}
      <Typography variant="body2"> {product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
          ;
        </Box>
        {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ` `}{" "}
      </Typography>
    </Box>
  );
}

export default Product;
// format don vi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
