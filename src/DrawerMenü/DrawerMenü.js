import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  IconButton,
  Box,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, styled } from "@mui/material";

import "./DrawerMenüCss.css";

function DrawerMenu() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = useMediaQuery("(max-width:800px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };
  const linkList = [
    { name: "Link 1", url: "1" },
    { name: "Link 2", url: "2" },
    { name: "Link 3", url: "3" },
    { name: "Link 4", url: "4" },
    { name: "Link 5", url: "5" },
    { name: "Link 6", url: "6" },
    { name: "Link 7", url: "7" },
    { name: "Link 8", url: "8" },
  ];

  const CustomButton = styled(Button)({
    borderRadius: "10px",
    color: "white",
    width: "100% ",
    backgroundColor: "#9D8E8E",
    "&:hover": {
      backgroundColor: "#716767",
    },
  });

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onChange={(e) => {
        setSearchTerm(e.target.value);
        console.log(e.target.value);
      }}
    >
      <List>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          
        />
        {linkList.map((link) => (
            //onClick={toggleDrawer(false)} listedeki butttonlara basıldığında drawer menüyü kapatır arama butonuna basılınca kapatmaz
          <ListItem onClick={toggleDrawer(false)} component="div" key={link.name}>
            <CustomButton variant="contained">{link.name}</CustomButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {isMobile ? (
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      ) : (
        <Drawer anchor="left" open={true} variant="permanent">
          {list()}
        </Drawer>
      )}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

export default DrawerMenu;
