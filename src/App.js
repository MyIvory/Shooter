import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/body/body";
import i18n from "./i18n";

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
  );
}

export default App;
