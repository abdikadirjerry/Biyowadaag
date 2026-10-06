import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import PublicLayout from "../layouts/PublicLayout";

import AboutPage from "../pages/public/AboutPage";
import HomePage from "../pages/public/HomePage";
import IssueDetailsPage from "../pages/public/IssueDetailsPage";
import IssuesPage from "../pages/public/IssuesPage";

import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

import CitizenIssueDetailsPage from "../pages/citizen/CitizenIssueDetailsPage";
import CitizenIssuesPage from "../pages/citizen/CitizenIssuesPage";
import CitizenOverviewPage from "../pages/citizen/CitizenOverviewPage";

import AdminAnalyticsPage from "../pages/admin/AdminAnalyticsPage";
import AdminIssueDetailsPage from "../pages/admin/AdminIssueDetailsPage";
import AdminIssuesPage from "../pages/admin/AdminIssuesPage";
import AdminOverviewPage from "../pages/admin/AdminOverviewPage";

import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/issues" element={<IssuesPage />} />
        <Route path="/issues/:id" element={<IssueDetailsPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<CitizenOverviewPage />} />

        <Route path="/dashboard/reports" element={<CitizenIssuesPage />} />

        <Route
          path="/dashboard/reports/:id"
          element={<CitizenIssueDetailsPage />}
        />

        <Route path="/admin" element={<AdminOverviewPage />} />

        <Route path="/admin/issues" element={<AdminIssuesPage />} />

        <Route path="/admin/issues/:id" element={<AdminIssueDetailsPage />} />

        <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
