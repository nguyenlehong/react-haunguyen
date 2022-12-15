import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Grid, Skeleton } from "@mui/material";

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};
ProductSkeletonList.defaultProps = {
  length: 6,
};
function ProductSkeletonList({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonList;
// sx: moble: 12 item
// sm : tablet 6 item
// md : 4 cot 3 item
//ld : 3 cot 4 item
