import "./App.css";
import Header from "./components/header/header";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Body from "./components/body/body";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

function App(props) {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter useRoutes={false}>
      <Header />
      <Body />
    </BrowserRouter>
  );
}

export default App;
