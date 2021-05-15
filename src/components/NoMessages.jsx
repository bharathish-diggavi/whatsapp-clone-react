import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import envelop from "../assets/svg/envelop.svg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  noMessageWrapper: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    "&>img": {
      height: "60%",
      width: "60%",
    },
  },
}));
const NoMessages = () => {
  const classes = useStyles();
  return (
    <div className={classes.noMessageWrapper}>
      <img src={envelop} alt="" />
      <Typography variant="h6">There are no messages yet</Typography>
    </div>
  );
};

export default NoMessages;
