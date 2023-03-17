import { useTranslation } from "react-i18next"
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import s from "./home_wiki.module.css"
import { Helmet } from "react-helmet";
const HomeWiki = () => {
  const { t } = useTranslation()
  return (
    <div className={s.main}>
      <Helmet>
        <title>Бібліотека зброї Gid Guns</title>
        <meta name="description" content="Ми зібрали тут обширну колекцію інформації про зброю, щоб допомогти вам розширити свої знання та розуміння цієї теми." />
        <meta property="og:title" content="Бібліотека зброї Gid Guns" />
        <meta property="og:description" content="Ми зібрали тут обширну колекцію інформації про зброю, щоб допомогти вам розширити свої знання та розуміння цієї теми." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://gidguns.info/wiki" />
        <meta property="og:image" content="http://gidguns.info/static/media/logo.dcd3c55c7b1b70652af7.png" />
      </Helmet>
      <p>{t("wiki_page.p0")}</p>
      <p>{t("wiki_page.p1")}</p>
      <p>{t("wiki_page.p2")}</p>
      <p>{t("wiki_page.p3_1")} <EditOutlined style={{ fontSize: 30 }} />{t("wiki_page.p3_2")}</p>
      <p>{t("wiki_page.p4_1")} <InfoCircleOutlined style={{ fontSize: 30 }} />{t("wiki_page.p4_2")}</p>
      <p>{t("wiki_page.p5")}</p>
    </div>


  )
}
export default HomeWiki