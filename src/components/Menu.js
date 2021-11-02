import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../actions/categoryActions";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Skeleton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import {
  getAllProducts,
  getProductsBySpecificCategory,
} from "../actions/productActions";
import Moment from "react-moment";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from "../actions/cartActions";

const style = {
  position: "absolute",
  maxHeight: "80vh",
  overflowY: "scroll",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const { categoryReducer, cartReducer } = useSelector((state) => state);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "15px" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              React-Shop
            </Link>
          </Typography>
          <div>
            <Button
              variant="contained"
              color="secondary"
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Category
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => dispatch(getAllProducts())}>
                All
              </MenuItem>
              {categoryReducer.loading ? (
                <Skeleton animation="wave" />
              ) : (
                categoryReducer.categories.map((category, i) => (
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      dispatch(getProductsBySpecificCategory(category));
                    }}
                    style={{ textTransform: "capitalize" }}
                    key={i}
                  >
                    {category}
                  </MenuItem>
                ))
              )}
            </Menu>
            <IconButton onClick={handleOpenModal}>
              <ShoppingCartIcon />
            </IconButton>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {cartReducer.cartItems.length === 0 ? (
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    No products.
                  </Typography>
                ) : (
                  cartReducer.cartItems.map((cartItem) => (
                    <ListItem
                      key={cartItem.date}
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon
                            onClick={() =>
                              dispatch(removeFromCart(cartItem.date))
                            }
                          />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar src={cartItem.image} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={cartItem.title}
                        secondary={
                          <>
                            <Typography>{`${cartItem.price} $`}</Typography>
                            <Moment format="DD/MM/YYYY hh:mm:ss">
                              {cartItem.date}
                            </Moment>
                          </>
                        }
                      />
                    </ListItem>
                  ))
                )}
              </Box>
            </Modal>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
