import React, { FC, Suspense, lazy } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import FallbackComponent from "./app/components/fallback.component";

const isAllowed = () => {
  const token = Boolean(window.localStorage.getItem("token"));
  return token;
};

// ======= private route =======
const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  return isAllowed() ? (
    <Suspense fallback={<FallbackComponent />}>
      <Element />
    </Suspense>
  ) : (
    <Navigate to={"/"} />
  );
};

// ======= public route =======
const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <Suspense fallback={<FallbackComponent />}>
    <Element />
  </Suspense>
);

// ======= layout & pages =======
const Layout = React.lazy(() => import("./app/layout"));
const LoginPage = React.lazy(() => import("./app/pages/login"));

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<PublicRoute element={LoginPage} />} />
      {/* PRIVATE */}
      
      {/* <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/training" />} />
        <Route path="/training/" element={<Navigate to="/training" />} />
      </Route> */}
    </Routes>
  );
};

export default AppRoutes;
