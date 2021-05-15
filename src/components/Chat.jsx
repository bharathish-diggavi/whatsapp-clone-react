import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chat: {
    flexShrink: "0",
    display: "grid",
    gridTemplateColumns: "1fr 5fr",
    minHeight: "50px",
    maxHeight: "70px",
    padding: "10px 10px",
    overflow: "hidden",
    borderBotton: "1px solid black",
  },
  avatar: {
    height: "50px",
    width: "50px",
    marginRight: "15px",
  },
  chatDetails: {
    display: "flex",
    flexDirection: "column",
    gridTemplateRows: "2r 1fr",
    flexWrap: "nowrap",
    "&>.name": {
      fontSize: "1.2em",
      fontWeight: "500",
    },
    "&>.lastMessage": {
      fontSize: ".8em",
      fontWeight: "400",
      flexGrow: "1",
    },
  },
}));

const Chat = () => {
  const classes = useStyles();
  return (
    <div className={classes.chat}>
      <Avatar className={classes.avatar} />
      <div className={classes.chatDetails}>
        <span className="name">Name</span>
        <span className="lastMessage">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          obcaecati veniam sapiente dignissimos eveniet ullam itaque nemo nobis
          temporibus. Recusandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloribus, vel?
        </span>
      </div>
    </div>
  );
};

export default Chat;
