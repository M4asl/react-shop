import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/productActions";
import ProductCard from "../components/ProductCard";

const Product = ({ match }) => {
  const dispatch = useDispatch();
  const { productReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProduct(match.params.productId));
  }, [match.params.productId]);

  return (
    <div>
      {productReducer.loading ? (
        <>
          <Box
            sx={{ width: "33%", marginRight: 0.5, my: 5 }}
            style={{ margin: "0 auto" }}
          >
            <Skeleton variant="rectangular" height={300} />

            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        </>
      ) : (
        <ProductCard product={productReducer.product} />
      )}
    </div>
  );
};

export default Product;
