import { Button, Tooltip } from "antd";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { useTranslation } from "react-i18next";
import SearchContainer from "../../../header/controls/search/searchContainer";
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import SourcesModal from "../../../../elements/sources_modal/sources_modal";
import { clickEdit } from "../../../../redux/reducers/wiki_reduser";
import i18next from "i18next";

let Info = (props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [sourcesObj, setSourchesObj] = useState({});
  useEffect(() => {
    setTitle(location.pathname.split("/").pop());
  }, [location]);
  return (
    <div className={s.main}>
      <div className={s.header}>
        <span className={s.title}>
          {title === "wiki" ? "" : t(`search.${title}.title`)}
        </span>
        <SearchContainer />
        <Tooltip title={t("buttons.edit_page")} placement="topLeft">
          <EditOutlined
            className={s.edit_but}
            style={{ fontSize: 32 }}
            onClick={clickEdit}
          />
        </Tooltip>
        <Tooltip title={t("buttons.sources_but")} placement="topLeft">
          <InfoCircleOutlined
            className={s.sources_but}
            style={{ fontSize: 32 }}
            onClick={() => {
              SourcesModal({
                sources: i18next.t(`search.${title}.sources`, {
                  returnObjects: true,
                }),
              });
            }}
          />
        </Tooltip>
      </div>
      <div className={s.info}>
        <Routes>
          <Route path="/" element={<Weapons />} />
          <Route index path="weapons/" element={<Weapons />} />
          <Route path="rifled-weapons" element={<WeaponsRifled />} />
          <Route path="rifled-bolt" element={<WeaponsRifledBolt />} />
          <Route
            path="rifled-semi-automatic"
            element={<SemiAutomaticRifled />}
          />
          <Route path="rifled-automatic" element={<AutomaticRifled />} />
          <Route path="smooth-weapons" element={<WeaponsSmooth />} />
          <Route
            path="smooth-semi-automatic"
            element={<SemiAutomaticSmooth />}
          />
          <Route path="smooth-pump" element={<Pump />} />
          <Route path="smooth-automatic" element={<OpeningSmooth />} />
          <Route path="search-result" element={<SearchResultContainer />} />
        </Routes>
      </div>
    </div>
  );
};
export default Info;
