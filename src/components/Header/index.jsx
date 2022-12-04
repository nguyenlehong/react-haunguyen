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

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <Button color="inherit" onClick={handleClickOpen}>
              Register
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <Register></Register>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
