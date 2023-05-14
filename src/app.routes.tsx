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
const LoginPage = lazy(() => import("./app/login/login.page"));
const ProfilePage = lazy(() => import("./app/profile"));

// ======= nested routes =======
const TrainingListRoutes = lazy(
  () => import("./app/training/trainingList.routes")
);
const TrainingRoutes = lazy(() => import("./app/training/training.routes"));

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
        <Route
          path="training/*"
          element={<PrivateRoute element={TrainingRoutes} />}
        />
        <Route
          path="profile"
          element={<PrivateRoute element={ProfilePage} />}
        />
      </Route>

      {/* DEFAULT */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
