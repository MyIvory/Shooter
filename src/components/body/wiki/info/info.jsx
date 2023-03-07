import { Button, Tooltip } from "antd";
import { Route, Routes, useLocation } from "react-router-dom";
import SearchResultContainer from "../pages/search_result/search_result_container";
import AutomaticRifled from "../pages/weapons/rifled/automatic_rifled/automatic_rifled";
import WeaponsRifled from "../pages/weapons/rifled/rifled";
import OpeningSmooth from "../pages/weapons/smooth/opening/opening";
import Pump from "../pages/weapons/smooth/pump/pump";
import SemiAutomaticSmooth from "../pages/weapons/smooth/semi_automatic_smooth/semi_automatic_smooth";
import WeaponsSmooth from "../pages/weapons/smooth/smooth";
import Weapons from "../pages/weapons/weapons";
import s from "./info.module.css";
import { useTranslation } from "react-i18next";
import SearchContainer from "../../../header/controls/search/searchContainer";
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import SourcesModal from "../../../../elements/sources_modal/sources_modal";
import { clickEdit } from "../../../../redux/reducers/wiki_reduser";
import i18next from "i18next";
import EditModal from "../../../../elements/edit_modal/edit_modal";
import HomeWiki from "../pages/home_wiki/home_wiki";
import NonAutomaticRifled from "../pages/weapons/rifled/non_automatic_rifled/non_automatic_rifled";
import RifledBoltAction from "../pages/weapons/rifled/non_automatic_rifled/bolt/bolt";
import RifledLeverAction from "../pages/weapons/rifled/non_automatic_rifled/lever/lever";
import RifledBreakAction from "../pages/weapons/rifled/non_automatic_rifled/break/break";
import RifledRevolver from "../pages/weapons/rifled/non_automatic_rifled/revolver/revolver";

let Info = (props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref1 = useRef(null);
  useEffect(() => {
    setTitle(location.pathname.split("/").pop());
  }, [location]);
  return (
    <div className={s.main}>
      <EditModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        data={i18next.t(`forms.sources_form`, {
          returnObjects: true,
        })}
      />
      <div className={s.header}>
        <span className={s.title}>
          {title === "wiki" ? "" : t(`search.${title}.title`)}
        </span>
        <SearchContainer />
        <Tooltip title={t("buttons.edit_page")} placement="topLeft">
          <EditOutlined
            className={s.edit_but}
            style={{ fontSize: 32 }}
            onClick={() => {
              setIsModalOpen(true);
            }}
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
                titles: i18next.t(`forms.sources_form`, {
                  returnObjects: true,
                }),
              });
            }}
          />
        </Tooltip>
      </div>
      <div className={s.info}>
        <Routes>
          <Route path="/" element={<HomeWiki />} />
          <Route index path="weapons/" element={<Weapons />} />
          <Route path="rifled-weapons" element={<WeaponsRifled />} />
          <Route path="nonautomatic-rifled" element={<NonAutomaticRifled />} /> 
          <Route path="rifled-bolt-action" element={<RifledBoltAction />} />
          <Route path="rifled-lever-action" element={<RifledLeverAction />} /> 
          <Route path="rifled-break-action" element={<RifledBreakAction />} /> 
          <Route path="rifled-revolver-action" element={<RifledRevolver />} /> 
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
