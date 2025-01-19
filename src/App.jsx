import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { Footer, NavBar } from "./components";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <NavBar />
          <AppRoutes />
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;
