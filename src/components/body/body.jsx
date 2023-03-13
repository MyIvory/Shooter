import Home from "./home/home";
import Wiki from "./wiki/wiki";
import s from "./body.module.css";
import Contacts from "./contacts/contacts";
import Weapons from "./wiki/pages/weapons/weapons";
import {
  useNavigate,
  useLocation,
  Route,
  Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useEffect } from "react";

let Body = (props) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const lang = i18n.language;
  // useEffect(() => {
  //   if (!location.pathname.startsWith(`/${lang}`)) {
  //     const newPath = `/${lang}${location.pathname.replace(/^\/(en|ua)/, "")}`;
  //       navigate(newPath, { replace: true });
  //   }
  // }, [location, lang, navigate]);

  return (
    <div className={s.main}>
      <Routes location={location}>
        {/*<Route path={`/${lang}`} element={<Home />} />
        <Route path={`/${lang}/wiki/*`} element={<Wiki />} />
        <Route path={`/${lang}/contacts`} element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" replace />} />  */}
        <Route path="/" element={<Home />} />
        <Route path="/wiki/*" element={<Wiki />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/wiki" replace />} />
      </Routes>
    </div>
  );
};
export default Body;
