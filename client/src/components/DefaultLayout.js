import React from "react";
import "../resources/default-layout.css";
import { Menu, Dropdown } from "antd";
import {useNavigate} from 'react-router-dom'

function DefaultLayout(props) {

  const user = JSON.parse(localStorage.getItem("expense-tracker-web"));
  const navigate = useNavigate()
  const menu = (
    <Menu
      items={[
        {
          label: (
            <li onClick={()=>{
              localStorage.removeItem('expense-tracker-web')
              navigate("/login");
            }}>Logout</li>
          ),
        }
      ]}
    />
  );

  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <h1 className="logo">Expense Tracker</h1>

        <div>
          <Dropdown overlay={menu} placement="bottomLeft">
            <button className='primary'>{user.name}</button>
          </Dropdown>
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
