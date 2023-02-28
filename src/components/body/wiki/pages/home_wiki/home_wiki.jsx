import { useTranslation } from "react-i18next"
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import s from "./home_wiki.module.css"
const HomeWiki = ()=>{
    const {t} =useTranslation()
    return(
  <div className={s.main}>
    <p>{t("wiki_page.p1")}</p> 
    <p>{t("wiki_page.p2")}</p>
    <p>{t("wiki_page.p3_1")} <EditOutlined style={{fontSize:30}}/>{t("wiki_page.p3_2")}</p> 
    <p>{t("wiki_page.p4_1")} <InfoCircleOutlined style={{fontSize:30}}/>{t("wiki_page.p4_2")}</p>   
    <p>{t("wiki_page.p5")}</p>          
    </div>   
    )
}
export default HomeWiki