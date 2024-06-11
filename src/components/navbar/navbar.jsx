import React, { useState } from 'react';
import { Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';    

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Mind</Link>
      </div>
      <div className="menuSection">
        <Button
          className="menuButton"
          type="primary"
          onClick={showDrawer}
          icon={<MenuOutlined />}
        />
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical" className="drawerMenu">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
        <Menu mode="horizontal" className="desktopMenu">
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </div>
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: #001529;
          color: #fff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .logo a {
          color: #fff;
          font-size: 24px;
          font-weight: bold;
          text-decoration: none;
        }
        .menuSection {
          display: flex;
          align-items: center;
        }
        .menuButton {
          display: none;
        }
        .desktopMenu {
          display: flex;
          background: none;
          border-bottom: none;
        }
        .desktopMenu .ant-menu-item {
          margin: 0 15px;
        }
        .desktopMenu .ant-menu-item a {
          color: #fff;
          font-size: 16px;
          font-weight: 500;
        }
        .desktopMenu .ant-menu-item a:hover {
          color: #1890ff;
        }
        .drawerMenu .ant-menu-item a {
          color: #001529;
          font-size: 16px;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .menuButton {
            display: inline-block;
          }
          .desktopMenu {
            display: none;
          }
        }
      `}</style>
      
    </div>
  );
};

export default Navbar;
