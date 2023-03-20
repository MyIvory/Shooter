import { Button, Drawer, QRCode, theme } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import EmailForm from "../../../elements/emailForm/emailForm";
import s from "./contacts.module.css";
let Contacts = (props) => {
  const { t } = useTranslation()
  const [emailDrawerVisible, setEmailDrawerVisible] = useState(false);
  const [socialDrawerVisible, setSocialtDrawerVisible] = useState(false);

  const showEmailDrawer = () => {
    setEmailDrawerVisible(true);
  };

  const showSocialDrawer = () => {
    setSocialtDrawerVisible(true);
  };

  const onCloseEmailDrawer = () => {
    setEmailDrawerVisible(false);
  };

  const onCloseSocialDrawer = () => {
    setSocialtDrawerVisible(false);
  };

  return (
    <div className={s.main}>
      <div style={{display:"flex" ,columnGap:10,justifyContent:"center"}}>
        <Button type="primary" htmlType="submit" className={s.formButton} style={{ width:150 }} onClick={showEmailDrawer}>
          {t("forms.message")}
        </Button>
        <Button type="primary" htmlType="submit" className={s.formButton} style={{ width:150  }} onClick={showSocialDrawer}>
          {t("forms.networks")}
        </Button>
      </div>
      <div className={s.qr}>
        <a href="https://send.monobank.ua/jar/6cqUaLsQkT" target="_blank" className={s.mono}>
          <QRCode
            value="https://send.monobank.ua/jar/6cqUaLsQkT"
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
      </div>
      <Drawer
        title={t("forms.mail_form.title")}
        placement={window.innerWidth > 600 ? "left" : "top"}
        closable={true}
        open={emailDrawerVisible}
        onClose={onCloseEmailDrawer}
        getContainer={false}
        size="large"
      >
        <EmailForm />
      </Drawer>
      <Drawer
        title="Social"
        placement={window.innerWidth > 600 ? "right" : "top"}
        closable={true}
        open={socialDrawerVisible}
        onClose={onCloseSocialDrawer}
        getContainer={false}
        size="large"
      >
        <div style={{display:"flex",justifyContent:"space-around",height:"100%",alignItems:"center" }}>
          <FaTelegramPlane style={{fontSize:64}}/>
          <FaFacebookF style={{fontSize:64}}/>
          <FaWhatsapp style={{fontSize:64}}/>

        </div>
      </Drawer>
    </div>
  );
};
export default Contacts;
