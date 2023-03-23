import React, { useState } from "react";
import { Drawer, useMediaQuery, IconButton, Button } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";

import "./DrawerMenu.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%"
  },
  label: {
    background: "#D9D9D9",
    paddingRight: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5),
    "&.Mui-focused": {
      color: "#9d8e8e",
    },
  },
  closeIcon: {
    color: theme.palette.grey[400],
    "&.hidden": {
      display: "none",
    },
  },
  searchIcon: {
    color: theme.palette.primary.main,
  },
}));

const useOutlinedInputStyles = makeStyles({
  root: {
    
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9d8e8e",
    },
  },
});

function DrawerMenu() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:700px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const buttons = [
    { name: "button1", id: "1" },
    { name: "button2", id: "2" },
    { name: "button3", id: "3" },
    { name: "button4", id: "4" },
    { name: "button5", id: "5" },
    { name: "button6", id: "6" },
    { name: "button7", id: "7" },
    { name: "button8", id: "8" },
    { name: "button9", id: "9" },
    { name: "button10", id: "10" },
    { name: "button11", id: "11" },
    
  ];

  const buttonList = buttons.map((number) => (
    <Button className="drawer-button" variant="contained">
      {number.name}
    </Button>
  ));
  const classes = useStyles();
  const outlinedInputStyles = useOutlinedInputStyles();
  
  const list = () => (
    <div className="drawerMenu">
      <div className="topics_Area">
      <FormControl size="small" margin="normal" className={classes.root} variant="outlined">
        <InputLabel className={classes.label} >Search</InputLabel>
        <OutlinedInput
          classes={outlinedInputStyles}
          id="search-input"
        />
      </FormControl>

        {buttonList}
      </div>
      <div className="controlArea">
        <Button className="drawer-button" variant="contained">
          Konu Ekle
        </Button>
        <Button className="drawer-button" variant="contained">
          Ayarlar
        </Button>
        <Button className="drawer-button" variant="contained">
          Çıkış Yap
        </Button>
      </div>
    </div>
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
