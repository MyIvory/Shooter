import { Button, Drawer, QRCode, theme } from "antd";
import { useState } from "react";
import EmailForm from "../../../elements/emailForm/emailForm";
import s from "./contacts.module.css";
let Contacts = (props) => {
  const [emailDrawerVisible, setEmailDrawerVisible] = useState(false);
  const [textDrawerVisible, setTextDrawerVisible] = useState(false);

  const showEmailDrawer = () => {
    setEmailDrawerVisible(true);
  };

  const showTextDrawer = () => {
    setTextDrawerVisible(true);
  };

  const onCloseEmailDrawer = () => {
    setEmailDrawerVisible(false);
  };

  const onCloseTextDrawer = () => {
    setTextDrawerVisible(false);
  };

  const containerStyle = {
    position: "relative",
    height: "65vh",
    width: "80%",
    padding: 48,
    overflow: "hidden",
    textAlign: "center",
    margin: "auto",
  };

  return (
    <div style={containerStyle}>
      <div>
        <Button type="primary" onClick={showEmailDrawer}>
          Open Email Drawer
        </Button>
        <Button style={{ marginLeft: 16 }} onClick={showTextDrawer}>
          Open Text Drawer
        </Button>
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
      <Drawer
        title="Отправить сообщение"
        placement="left"
        closable={false}
        open={emailDrawerVisible}
        onClose={onCloseEmailDrawer}
        getContainer={false}
        size="large"
      >
        <EmailForm />
      </Drawer>
      <Drawer
        title="Text Drawer"
        placement="right"
        closable={false}
        open={textDrawerVisible}
        onClose={onCloseTextDrawer}
        getContainer={false}
        size="large"
      >
        <div style={{ padding: "32px" }}>SOME TEXT</div>
      </Drawer>
    </div>
  );
};
export default Contacts;
