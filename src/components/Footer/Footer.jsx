import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography, styled } from "@mui/material";

const Buttons = styled(Button)({
  "&:hover": {
    color: "#E69B1A",
    textDecoration: "none",
  },
});

export const Footer = () => {
  return (
    <>
      <Box sx={{ width: "100%", bottom: 0 }}>
        <Grid
          container
          sx={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <Grid item>
            <Typography variant="p">
              {new Date().getFullYear()} &copy; TNPSC Learn Easy
            </Typography>
          </Grid>

          <Grid item lg={12} xs={12} md={12} sm={12} align="center">
            <Link to="/privacy-policy" style={{ textDecoration: "none" }}>
              <Buttons sx={{ color: "white" }}>Privacy Policy</Buttons>
            </Link>
            <Link to="/terms-of-service" style={{ textDecoration: "none" }}>
              <Buttons sx={{ color: "white" }}>Terms of Service</Buttons>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
