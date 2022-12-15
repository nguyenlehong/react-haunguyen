import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import productApi from "api/productApi";
import { useState } from "react";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductList from "../components/ProductList";
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
}));
const ProListPage = (props) => {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log("loading product list faile", error);
      }
      setLoading(false);
    })();
  });
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            {" "}
            <Paper>Left column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            {" "}
            <Paper>
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProListPage;
