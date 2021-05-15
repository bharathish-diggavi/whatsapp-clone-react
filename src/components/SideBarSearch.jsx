import React from "react";
import { IconButton, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchWrapper: {
    flexBasis: "5%",
    display: "flex",
    alignItems: "center",
    width: "100%",
    background: "#F6F6F6",
  },
  search: {
    display: "flex",
    width: "100%",
    borderRadius: "40px",
    maxHeight: "40px",
    padding: "5px 10px",
    "& * ": {
      maxHeight: "40px",
    },
    "& .searchicon": {
      background: "#FFFFFF",
      borderRadius: "40px 0 0 40px",
    },
    "& .input": {
      padding: "5px 10px",
      background: "#FFFFFF",
      borderRadius: "0 40px 40px 0",
      width: "100%",
    },
  },
}));
const SideBarSearch = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchWrapper}>
      <div className={classes.search}>
        <IconButton className="searchicon">
          <Search />
        </IconButton>
        <InputBase placeholder="Search in chat" className="input"></InputBase>
      </div>
    </div>
  );
};

export default SideBarSearch;
