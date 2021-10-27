import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";

const { Option } = Select;

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const FormDeneme = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log("Received values of form: ");
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="90">+90</Option>
        
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );

  const onWebsiteChange = () => {};

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "90",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Ad"
   
      >
        <Input />
      </Form.Item>

      <Form.Item
             name="surname"
             label="Soyad"
       
           >
             <Input />
      </Form.Item>
     
      <Form.Item
        name="phone"
        label="Telefon Numarası"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="eposta"
        label="E-mail"
   
      >
        <Input />
        </Form.Item>
      <Form.Item
        name="donation"
        label="Kişi Sayısı"
        rules={[{ required: true }]}
      >
        <InputNumber addonAfter={suffixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        name="website"
        label="Firma Bilgisi"
        rules={[{ required: true}]}
      >
        <AutoComplete placeholder="Firma Bilgisi">
          <Input />
        </AutoComplete>
      </Form.Item>

  
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormDeneme;
