import React from "react";
import { IconButton, Avatar } from "@material-ui/core";
import { MoreVert, Chat, DonutLarge } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import me from "../assets/images/me.jpg";

const useStyles = makeStyles((theme) => ({
  sidebarHeader: {
    flexBasis: "5%",
    display: "flex",
    padding: "10px 10px",
    alignItems: "center",
    width: "100%",
    "&>*": {
      height: "30px",
      width: "30px",
    },
  },
  avatar: {
    height: "45px",
    width: "45px",
    marginRight: "auto",
  },
  status: {
    marginRight: "30px",
  },
  chat: {
    marginRight: "30px",
  },
  more: {},
}));
const SideBarHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebarHeader}>
      <IconButton className={classes.avatar}>
        <Avatar src={me} />
      </IconButton>
      <IconButton className={classes.status}>
        <DonutLarge />
      </IconButton>
      <IconButton className={classes.chat}>
        <Chat />
      </IconButton>
      <IconButton className={classes.more}>
        <MoreVert />
      </IconButton>
    </div>
  );
};

export default SideBarHeader;
