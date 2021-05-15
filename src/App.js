import { CssBaseline, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChatArea from "./components/ChatArea";
import Sidebar from "./components/Sidebar";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
    },
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "red",
    height: "100vh",
  },
  container: {
    display: "flex",
    background: "linear-gradient(to bottom, #009688 13vh, #D9DCD6 13vh);",
    minHeight: "100vh",
    maxHeight: "100vh",
    padding: "2vh 0",
  },
  innerContainer: {
    display: "grid",
    gridTemplateColumns: "2fr 6fr",
    minHeight: "100%",
    maxHeight: "100%",
    width: "100%",
    padding: "0",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <CssBaseline>
      <Container className={classes.container} maxWidth="xl">
        <Container className={classes.innerContainer}>
          <Sidebar />
          <ChatArea />
        </Container>
      </Container>
    </CssBaseline>
  );
}

export default App;
