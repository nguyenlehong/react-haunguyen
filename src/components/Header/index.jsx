import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Link, Outlet } from "react-router-dom";
import "./styles.scss";
import Register from "features/Auth/components/Register";
import Login from "features/Auth/components/Login";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountCircle } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { logout } from "features/Auth/userSlice";

export default function Header() {
  // video #27
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const dispatch = useDispatch();

  const MODE = {
    LOGIN: "login",
    REGISTER: "register",
  };
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LocalGroceryStoreIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className="link" to="/home">
                AAA SHOP
              </Link>
            </Typography>
            <Link className="link" to="new-todo">
              {" "}
              <Button color="inherit"> Todo</Button>
            </Link>{" "}
            <Link className="link" to="new-album">
              {" "}
              <Button color="inherit"> Album</Button>
            </Link>
            <Link className="link" to="counter">
              {" "}
              <Button color="inherit"> Counter</Button>
            </Link>
            {!isLoggedIn && (
              <Button color="inherit" onClick={handleClickOpen}>
                Login
              </Button>
            )}
            {isLoggedIn && (
              <IconButton onClick={handleUserClick}>
                <AccountCircle />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        {/* custom thong bao menu icon:
        https://mui.com/material-ui/react-popper/#scroll-playground
        https://www.gettainguyen.com/0:/Kh%C3%B3a%20H%E1%BB%8Dc/IT/
        ReactJS%20cho%20ng%C6%B0%E1%BB%9Di%20m%E1%BB%9Bi%20b%E1%BA%AFt%20%C4%91%E1%BA%A7u%202020/
        Xem%20Online/15.%20Authentication%20Module/
        28.%20T%E1%BA%A1o%20drop%20down%20menu%20cho%20user%20icon.mp4?a=view */}
        <Menu
          placement="bottom-end"
          disablePortal={true}
          modifiers={[
            {
              name: "flip",
              enabled: true,
              options: {
                altBoundary: false,
                rootBoundary: "document",
                padding: 8,
              },
            },
            {
              name: "preventOverflow",
              enabled: false,
              options: {
                altAxis: false,
                altBoundary: true,
                tether: true,
                rootBoundary: "document",
                padding: 8,
              },
            },
            {
              name: "arrow",
              enabled: false,
            },
          ]}
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Menu>
      </Box>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose}></Register>
              <p onClick={() => setMode(MODE.LOGIN)}>
                already have an account. login here
              </p>
            </>
          )}{" "}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose}></Login>
              <p onClick={() => setMode(MODE.REGISTER)}>Create an account</p>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
