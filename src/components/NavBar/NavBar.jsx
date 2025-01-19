import React, { useState } from "react";
import DrawerContent from "./DrawerContent";
import AppBarContent from "./AppBarContent";
import "./NavBar.css";

export const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBarContent toggleDrawer={toggleDrawer} />

      {/* Drawer for smaller screen */}
      <DrawerContent drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};
