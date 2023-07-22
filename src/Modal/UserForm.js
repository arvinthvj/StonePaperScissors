import React, { useContext } from "react";
import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import GameDataContext from "../Store/gameContext";

const UserForm = () => {
  let { postUserDataToFirestore, userNames , setUserNames} = useContext(GameDataContext);
  let history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
    postUserDataToFirestore(values, "rps").then((e) => {
        setUserNames({0 : values["one"] , 1 : values["two"]})
        console.log(userNames)
      history.push("/play");
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Player 1"
        name="one"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Player 2"
        name="two"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className="user_form_button" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
