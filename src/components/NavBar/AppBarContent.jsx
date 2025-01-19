import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { LocalLibrary, Menu } from "@mui/icons-material";

const Buttons = styled(Button)({
  "&:hover": {
    color: "#E69B1A",
    textDecoration: "none",
  },
});

const AppBarContent = ({ toggleDrawer }) => {
  const navigate = useNavigate();

  return (
    <AppBar sx={{ position: "static", top: 0 }}>
      <Toolbar sx={{ backgroundColor: "black" }}>
        {/* Large screen */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ display: { xs: "none", md: "flex" } }}
          onClick={() => navigate("/")}
        >
          <LocalLibrary />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            paddingRight: "0px",
          }}
          onClick={() => navigate("/")}
        >
          TNPSC Learn Easy
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, paddingRight: "0px" }}>
          <Link to="/">
            <Buttons sx={{ color: "white" }}>Home</Buttons>
          </Link>
          <Link to="/tnpsc-subject-wise-online-test">
            <Buttons sx={{ color: "white" }}>MCQ</Buttons>
          </Link>
          <Link to="/about-us">
            <Buttons sx={{ color: "white" }}>About us</Buttons>
          </Link>
          <Link to="/contact-us">
            <Buttons sx={{ color: "white" }}>Contact Us</Buttons>
          </Link>
        </Box>

        {/* Small screen */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            color="inherit"
            edge="start"
            aria-label="logo"
            onClick={() => toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          TNPSC Learn Easy
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarContent;
