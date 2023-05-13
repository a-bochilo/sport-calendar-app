import { FC, Suspense, lazy, PropsWithChildren } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

// ===================== components =====================
import FallbackComponent from "./app/components/fallback.component";

const isAllowed = () => {
  const token = Boolean(window.localStorage.getItem("token"));
  return token;
};

// ======= private route =======
const PrivateRoute: FC<PropsWithChildren & { element: any }> = ({
  element: Element,
}) => {
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
const Layout = lazy(() => import("./app/layout"));
const LoginPage = lazy(() => import("./app/pages/login/login.page"));

// ======= nested routes =======
const TrainingListRoutes = lazy(
  () => import("./app/pages/training/training.routes")
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* PUBLIC */}
        <Route path="/" element={<PublicRoute element={LoginPage} />} />

        {/* PRIVATE */}
        <Route
          path="training-list/*"
          element={<PrivateRoute element={TrainingListRoutes} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
