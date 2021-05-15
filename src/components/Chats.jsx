import React from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "./Chat";

const useStyles = makeStyles((theme) => ({
  chatsSection: {
    flexBasis: "90%",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    maxHeight: "830px",
    background: "#FFFFFF",
  },
}));
const Chats = () => {
  const classes = useStyles();
  return (
    <div className={classes.chatsSection}>
      {_.range(0, 2).map((i) => (
        <Chat />
      ))}
    </div>
  );
};

export default Chats;
