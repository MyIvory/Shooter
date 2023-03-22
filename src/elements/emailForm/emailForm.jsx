import React from "react";
import { Form, Input, Button } from "antd";
import s from "./emailForm.module.css";
import { useForm } from "antd/es/form/Form";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;
const EmailForm = () => {
  const {t}=useTranslation()
  const [form] = useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className={s.formContainer}>
      <p className={s.formDescription}>
      {t("forms.mail_form.description")}
      </p>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <div className={s.nameInputsWrapper}>
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: t("forms.mail_form.rules_name") },
            ]}
            style={{ flex: 1, marginRight: "10px" }}
          >
            <Input placeholder={t("forms.mail_form.name")}/>
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: t("forms.mail_form.rules_lastName") },
            ]}
            style={{ flex: 1 }}
          >
            <Input placeholder={t("forms.mail_form.surname")} />
          </Form.Item>
        </div>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: t("forms.mail_form.rules_mail") },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="message"
          rules={[
            { required: true, message: t("forms.mail_form.rules_message") },
          ]}
        >
          <TextArea rows={4} placeholder={t("forms.mail_form.message")} />
        </Form.Item>

        <Form.Item>
          <div style={{ display: "flex",columnGap:10}}>
            <Button type="primary" htmlType="submit" className={s.formButton} style={{ flex: 1 }}>
            {t("forms.mail_form.but_send")}
            </Button>
            <Button type="primary" htmlType="submit" className={s.formButton} onClick={onReset} style={{ flex: 1 }}>
            {t("forms.mail_form.but_clear")}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmailForm;
