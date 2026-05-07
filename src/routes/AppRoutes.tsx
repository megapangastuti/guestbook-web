import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import HomePage from "../components/pages/HomePage/HomePage";
import DashboardPage from "../components/pages/DashboardPage/DashboardPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
