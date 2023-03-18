import VideoBackground from "../../../elements/videoBackGround/videoBackGround";
import s from "./home.module.css";
import { useTranslation } from "react-i18next";
import { QRCode, Space } from "antd";
import { Helmet } from "react-helmet";
let Home = (props) => {
  const { t } = useTranslation();
  return (
    <div className={s.main}>
      <Helmet>
        <title>Онлайн-бібліотека про стрілецьку зброю - Gid Guns</title>
        <meta name="description" content="Gid Guns - онлайн-бібліотека, що пропонує широкий вибір статей про різні види стрілецької зброї, її історію, технологію та використання. Наша бібліотека відкрита для всіх, і ми пишаємося тим, що можемо надати безкоштовний доступ до нашої колекції статей." />
        <meta property="og:title" content="Онлайн-бібліотека про стрілецьку зброю - Gid Guns" />
        <meta property="og:description" content="Gid Guns - онлайн-бібліотека, що пропонує широкий вибір статей про різні види стрілецької зброї, її історію, технологію та використання. Наша бібліотека відкрита для всіх, і ми пишаємося тим, що можемо надати безкоштовний доступ до нашої колекції статей." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://gidguns.info"/>
        <meta property="og:image" content="http://gidguns.info/static/media/logo.dcd3c55c7b1b70652af7.png" />
      </Helmet>
      <div className={s.text}>
        <h1>{t("home_page.p1")}</h1>
        <p>{t("home_page.p2")}</p>
        <p>{t("home_page.p3")}</p>
        <p>{t("home_page.p4")}</p>
        <p>{t("home_page.p5")}</p>
      </div>
      <div className={s.qr}>
        {/* <h4>{t("home_page.qr_link")}</h4> */}
        {/* <Space> */}
        <a href="https://send.monobank.ua/jar/6cqUaLsQkT" target="_blank" className={s.mono}>
          <QRCode

            value="https://send.monobank.ua/jar/6cqUaLsQkT"
            //  color={"red"}
            style={{ marginBottom: 16, backgroundColor: "inherit" }}
            icon="/img/mono.jpeg"
            size={200}
            iconSize={40}
          />
        </a>
        <a href="https://www.paypal.com/donate/?hosted_button_id=T2V5DEPFHHWT6" target="_blank" className={s.paypal}>
          <QRCode

            value="https://www.paypal.com/donate/?hosted_button_id=T2V5DEPFHHWT6"
            color={"#001f6a"}
            style={{ marginBottom: 16, backgroundColor: "inherit" }}
            icon="/img/paypal.png"
            size={200}
            iconSize={40}
          />
        </a>
        {/* </Space> */}
      </div>
    </div>
  );
};
export default Home;

