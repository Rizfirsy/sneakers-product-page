import { Fragment } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import ContainerPage from "./components/ContainerPage";

function App() {
  return (
    <Fragment>
      <Header />
      <ContainerPage />
    </Fragment>
  );
}

export default App;
