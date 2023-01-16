import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TrophyOutlined,
  HomeOutlined,
  SmileOutlined,
  ImportOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./Layout.css";
import Home from "./../Home/Home";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="user__information">
          <SmileOutlined />
        </div>
        <Menu
          className="antd-menu"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            <HomeOutlined />
            <span>Home</span>
            <Link to="/home"></Link>
          </Menu.Item>
          <Menu.Item key="2">
            <UserOutlined />
            <span>Usuários</span>
            <Link to="/users"></Link>
          </Menu.Item>
          <Menu.Item key="3">
            <TrophyOutlined />
            <span>Torneios</span>
            <Link to="/tournaments"></Link>
          </Menu.Item>
          <Menu.Item key="0" className="logout">
            <ImportOutlined />
            <span>Sair</span>
            <Link to="/"></Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-header-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="header__container">
            <h1 className="header__info">Padel Match</h1>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Home />
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
