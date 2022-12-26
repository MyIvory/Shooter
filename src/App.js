import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/body/body";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body/>
    </BrowserRouter>
  );
}

export default App;
