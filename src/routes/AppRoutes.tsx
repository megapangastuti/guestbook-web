import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import Layout from "../components/templates/Layout/Layout";
import DashboardPage from "../components/pages/DashboardPage/DashboardPage";
import UserPage from "../components/pages/UserPage/UserPage";
import VisitorPage from "../components/pages/VisitorPage/VisitorPage";
import VisitPage from "../components/pages/VisitPage/VisitPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/visitors" element={<VisitorPage />} />
          <Route path="/visits" element={<VisitPage />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
