import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SearchResultContainer from "../pages/search_result/search_result_container";
import AutomaticRifled from "../pages/weapons/rifled/automatic_rifled/automatic_rifled";
import WeaponsRifledBolt from "../pages/weapons/rifled/bolt/bolt";
import WeaponsRifled from "../pages/weapons/rifled/rifled";
import SemiAutomaticRifled from "../pages/weapons/rifled/semi_automatic_rifled/semi_automatic_rifled";
import OpeningSmooth from "../pages/weapons/smooth/opening/opening";
import Pump from "../pages/weapons/smooth/pump/pump";
import SemiAutomaticSmooth from "../pages/weapons/smooth/semi_automatic_smooth/semi_automatic_smooth";
import WeaponsSmooth from "../pages/weapons/smooth/smooth";
import Weapons from "../pages/weapons/weapons";
import s from "./info.module.css";
let Info = (props) => {
  return (
    <div className={s.main}>
      <Routes>
        <Route path="/" element={<Weapons />} />
        <Route index path="weapons" element={<Weapons />} />
        <Route path="rifled-weapons" element={<WeaponsRifled />} />
        <Route path="rifled-bolt" element={<WeaponsRifledBolt />} />
        <Route path="rifled-semi-automatic" element={<SemiAutomaticRifled />} />
        <Route path="rifled-automatic" element={<AutomaticRifled />} />
        <Route path="smooth-weapons" element={<WeaponsSmooth />} />
        <Route path="smooth-semi-automatic" element={<SemiAutomaticSmooth />} />
        <Route path="smooth-pump" element={<Pump />} />
        <Route path="smooth-automatic" element={<OpeningSmooth />} />
        <Route path="search-result" element={<SearchResultContainer />} />

      </Routes>
    </div>
  );
};
export default Info;
