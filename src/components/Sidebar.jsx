import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBarHeader from "./SideBarHeader";
import SideBarSearch from "./SideBarSearch";
import Chats from "./Chats";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    background: "#EDEDED",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <SideBarHeader />
      <SideBarSearch />
      <Chats />
    </div>
  );
};

export default Sidebar;
