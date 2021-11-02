import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function MediaCard({ product }) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "0 auto" }}>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt="green iguana"
      />
      <CardContent>
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small">{product.price}$</Button>
        <IconButton
          size="small"
          onClick={() => dispatch(addToCart(product.id))}
        >
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
