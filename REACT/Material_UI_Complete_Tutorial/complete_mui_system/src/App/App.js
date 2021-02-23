import "./App.css";
import { makeStyles } from "@material-ui/core";
import { SlideMenu } from "../components/SideMenu";
import { Header } from "../components/Header";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <SlideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
    </>
  );
}

export default App;
