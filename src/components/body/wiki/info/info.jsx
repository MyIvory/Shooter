import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weapons from "../pages/weapons/weapons";
import s from "./info.module.css";
let Info = (props) => {
  console.log("Info");
  return (
    <div className={s.main}>     
        <Routes>
          <Route path="/wiki/weapons/*" element={<Weapons />} />
        </Routes>
    </div>
  );
};
export default Info;
