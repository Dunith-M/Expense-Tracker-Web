import React from "react";
import { Form } from "antd";
import Input from "antd/lib/input/Input";
//import Link from "antd/lib/typography/Link";
import { Link } from "react-router-dom"; 
import "../resources/authentication.css";

function Login() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="login">
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Expense Tracker Login</h1>

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">
                Not Registered yet, Click here to Register
              </Link>
              <button className="primary" type="submit">
                LOGIN
              </button>
            </div>
          </Form>
        </div>

        <div className="col-md-5">
          <div className="lottie">
            <dotlottie-wc
              src="https://lottie.host/42b57495-000f-418f-a755-5a0075d64cfd/JkdgYoBq7Z.lottie"
              speed="1"
              autoplay
              loop
            ></dotlottie-wc>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
