import React from "react";
import { IconButton, Avatar, Typography, InputBase } from "@material-ui/core";
import {
  MoreVert,
  Search,
  EmojiEmotions,
  KeyboardVoice,
  Send,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chatSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  chatHeader: {
    display: "flex",
    alignItems: "center",
    alignSelf: "top",
    justifySelf: "",
    flexBasis: "5%",
    background: "#EDEDED",
    padding: "10px 10px",
    "&>*": {
      marginRight: "15px",
    },
    "& .avatar": {
      height: "45px",
      width: "45px",
    },
    "& > .name": {
      flexGrow: 2,
    },
  },
  chatArea: {
    flexGrow: 2,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundImage: "url(./chat-background.jpg)",
    padding: "20px 50px",
    overflowY: "scroll",
    maxHeight: "803px",
    "& .message": {
      padding: "10px 10px",
      minWidth: "20%",
      maxWidth: "60%",
      margin: "10px 0",
      borderRadius: "5px",
    },
    "& .right": {
      background: "#D7F2C1",
      alignSelf: "flex-end",
    },
    "& .left": {
      background: "#FFFFFF",
    },
  },
  typeArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexBasis: "5%",
    padding: "10px 10px",
    background: "#F0F0F0",
    "& > *": {
      marginRight: "15px",
    },
    "& .mgsInput": {
      flexGrow: 2,
    },
    "& .input": {
      width: "100%",
      padding: "5px 10px",
      background: "#FFFFFF",
      borderRadius: "40px",
    },
  },
}));

const ChatSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.chatSection}>
      <ChatHeader />
      <ChatsArea />
      <TypeArea />
    </div>
  );
};

const ChatHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.chatHeader}>
      <IconButton className="avatar">
        <Avatar />
      </IconButton>
      <Typography className="name" variant="body1">
        Name
      </Typography>
      <IconButton className="search">
        <Search />
      </IconButton>
      <IconButton className="more">
        <MoreVert />
      </IconButton>
    </div>
  );
};
const ChatsArea = () => {
  const classes = useStyles();
  return (
    <div className={classes.chatArea}>
      <div className="message left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
        voluptates consequatur dolorum ipsa mollitia minus ab nam. Quisquam,
        quae magnam inventore excepturi, harum dicta expedita rem quia
        voluptates at laudantium?
      </div>
      <div className="message right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message right">Lorem, .</div>
      <div className="message left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
      <div className="message right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem asperiores repellendus laborum voluptatibus, nemo, nihil
        eveniet, neque saepe id est consequatur sint sunt eos consectetur
        necessitatibus quo assumenda dolores.
      </div>
    </div>
  );
};

const TypeArea = () => {
  const classes = useStyles();
  return (
    <div className={classes.typeArea}>
      <IconButton>
        <EmojiEmotions />
      </IconButton>
      <form className="mgsInput">
        <InputBase placeholder="Search in chat" className="input"></InputBase>
      </form>
      <IconButton>
        <Send />
      </IconButton>
      <IconButton>
        <KeyboardVoice />
      </IconButton>
    </div>
  );
};

export default ChatSection;
