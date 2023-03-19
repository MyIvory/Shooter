import React from "react";
import { Form, Input, Button } from "antd";
import s from "./emailForm.module.css";
import { useForm } from "antd/es/form/Form";

const { TextArea } = Input;

const EmailForm = () => {
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
        Пожалуйста, заполните форму ниже и нажмите кнопку "Отправить", чтобы
        отправить сообщение на нашу электронную почту.
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
              { required: true, message: "Пожалуйста, введите ваше имя!" },
            ]}
            style={{ flex: 1, marginRight: "10px" }}
          >
            <Input placeholder="Имя" />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: "Пожалуйста, введите вашу фамилию!" },
            ]}
            style={{ flex: 1 }}
          >
            <Input placeholder="Фамилия" />
          </Form.Item>
        </div>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Пожалуйста, введите ваш email!" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="message"
          rules={[
            { required: true, message: "Пожалуйста, введите ваше сообщение!" },
          ]}
        >
          <TextArea rows={4} placeholder="Сообщение" />
        </Form.Item>

        <Form.Item>
          <div style={{ display: "flex",columnGap:10}}>
            <Button type="primary" htmlType="submit" className={s.formButton} style={{ flex: 1 }}>
              Отправить
            </Button>
            <Button type="primary" htmlType="submit" className={s.formButton} onClick={onReset} style={{ flex: 1 }}>
              Очистить
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmailForm;
