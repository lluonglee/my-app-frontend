import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import About from "./pages/AboutPage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home page</Layout>} />
      <Route path="about" element={<About />} />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/user-profile" element={<UserProfilePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default AppRoutes;
