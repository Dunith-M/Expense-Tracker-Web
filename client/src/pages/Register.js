import React from "react";
import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
//import Link from "antd/lib/typography/Link";
import { Link } from "react-router-dom"; 
import '../resources/authentication.css';
import axios from "axios";

function Register() {

  const onFinish = async(values)=>{
    try {
      
      await axios.post("/api/users/register", values);
      message.success("Registration Successfull");
      
    } catch (error) {
      message.error("Something went wrong");
      
    }
  }

  return (
    <div className="register">
      
      <div className="row justify-content-center align-items-center w-100 h-100">
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

        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Expense Tracker Register</h1>
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered, Click here to Login</Link>
              <button className="primary" type="submit">REGISTER</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
