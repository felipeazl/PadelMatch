import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import HomePage from "../pages/Layout/Layout";
import PageUser from "./Users/Users";
import PageTournament from "./Tournaments/Tournaments";
import OpenTournament from "./Tournaments/OpenTournament/OpenTournament";

const PagesRoot = () => {
  const pageID = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/home" exact />
        <Route element={<LoginPage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<PageUser />} path="/users" />
        <Route element={<PageTournament />} path="/tournaments" />
        <Route
          element={<OpenTournament id={pageID} />}
          path="/tournaments/:id"
        />
        {/* <Layout></Layout> */}
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoot;
