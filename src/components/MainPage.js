import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "./Form/Index.js";
import "../App.css";

function MainPage() {
  return (
    <div className="root">
      <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RESUME BUILDER
            </Typography>            
          </Toolbar>
        </AppBar>
      </Box>
      <Form />
      </BrowserRouter>
    </div>
  );
}

export default MainPage;
