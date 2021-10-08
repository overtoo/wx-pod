import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BasicMenu from "./BasicMenu";

function Reader() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* iconbutton  stuff removed */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WX-POD
          </Typography>
          <BasicMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Reader;
