import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const DrawerContent = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer
      anchor="top"
      open={drawerOpen}
      onClose={() => toggleDrawer(false)}
      sx={{ display: { xs: "block", md: "none" } }}
    >
      <List>
        <ListItem sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            TNPSC Learn Easy
          </Typography>
          <IconButton onClick={() => toggleDrawer(false)}>
            <Close />
          </IconButton>
        </ListItem>
        <ListItem>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "black" }} onClick={() => toggleDrawer(false)}>
              Home
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="/tnpsc-subject-wise-online-test"
            style={{ textDecoration: "none" }}
          >
            <Button sx={{ color: "black" }} onClick={() => toggleDrawer(false)}>
              MCQ
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/about-us" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "black" }} onClick={() => toggleDrawer(false)}>
              About us
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contact-us" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "black" }} onClick={() => toggleDrawer(false)}>
              contact us
            </Button>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerContent;
