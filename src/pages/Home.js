import { Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { productReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: "10px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {productReducer.loading ? (
          <>
            <Box sx={{ width: "33%", marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" height={300} />

              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
            <Box sx={{ width: "33%", marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" height={300} />

              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
            <Box sx={{ width: "33%", marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" height={300} />

              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
          </>
        ) : (
          productReducer.products.map((product) => (
            <Grid item xs={4} sm={4} md={4} key={product.id}>
              <ProductCard key={product.id} product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Home;
