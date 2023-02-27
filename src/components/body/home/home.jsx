import VideoBackground from "../../../elements/videoBackGround/videoBackGround";
import s from "./home.module.css";
import { useTranslation } from "react-i18next";
import { QRCode, Space } from "antd";
let Home = (props) => {
  const { t } = useTranslation();
  return (
    <div className={s.main}>
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
          <a href="https://send.monobank.ua/jar/6cqUaLsQkT" target="_blank"  className={s.mono}>
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

let fun = (c, i) => {
  return new Array(c).fill(i).join(" ");
};
