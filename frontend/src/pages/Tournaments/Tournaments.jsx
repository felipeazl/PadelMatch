import React, { useState } from "react";
import "./Tournaments.css";
import NewTournament from "../../components/Cards/NewTournament/NewTournament";
import ModalTournament from "../../components/Modal/ModalTournament";
import TournamentTable from "./Table/TournamentTable";
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
import "../Layout/Layout.css";
import { Link } from "react-router-dom";

const PageTournament = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [ModalTournamentVisible, setModalTournamentVisible] = useState(false);
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
          defaultSelectedKeys={["3"]}
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
          <div className="page-tournament__container">
            <div className="page-tournament__header">
              <div className="title_area">
                <h1 className="page-tournament__title">Torneios</h1>
              </div>
              <a onClick={() => setModalTournamentVisible(true)}>
                <NewTournament></NewTournament>
              </a>
            </div>
            {ModalTournamentVisible ? (
              <ModalTournament
                onClose={() => setModalTournamentVisible(false)}
              />
            ) : null}
            <TournamentTable />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageTournament;
