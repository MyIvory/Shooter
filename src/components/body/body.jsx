import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Wiki from "./wiki/wiki";
import s from "./body.module.css";
import Contacts from "./contacts/contacts";
import Weapons from "./wiki/pages/weapons/weapons";

let Body = (props) => {
  return (
    <div className={s.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="wiki/*" element={<Wiki />}/>
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};
export default Body;
