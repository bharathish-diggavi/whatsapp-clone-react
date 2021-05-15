import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NoMessages from "./NoMessages";
import ChatSection from "./ChatSection";

const useStyles = makeStyles((theme) => ({
  chatArea: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    background: "#F8F9FA",
    maxHeight: "100%",
  },
}));

const ChatArea = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([1]);
  return (
    <div className={classes.chatArea}>
      {messages.length === 0 ? <NoMessages /> : <ChatSection />}
    </div>
  );
};

export default ChatArea;
