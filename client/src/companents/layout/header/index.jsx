import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import "./index.scss"
const Header = () => {
  const items = [
    {
      label: (
        <Link to={"/elements"}>Elements</Link>
      ),
      key: '0',
    },
    {
      type: 'divider',
    },
  
  ];
  const items2 = [
    {
      label: (
        <Link to={"/blog-home"}>Blog Home</Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link to={"/blog-detail"}>Blog Detail</Link>
      ),
      key: '0',
    },
    {
      type: 'divider',
    },
  
  ];
  return (
    <div id="header">
      <div className="container">
      <div className='header'>
      <Link to={"/"} ><img src="https://preview.colorlib.com/theme/educature/img/logo.png" alt="" /></Link>
      <i className="fa-solid fa-bars"></i>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
  <NavLink to={"/about"}>About</NavLink>
  <NavLink to={"/courses"}>Courses</NavLink>
        <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
       Pages
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  <Dropdown
    menu={{
      items:items2,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
       Blog
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
        <NavLink to={"/contact"}>Contact</NavLink>
  <NavLink to={"/add"}>Add</NavLink>
      </nav>
    </div>
      </div>
 
    </div>
   
  )
}

export default Header