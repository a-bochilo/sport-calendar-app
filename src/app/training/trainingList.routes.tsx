import { FC, PropsWithChildren, Suspense, lazy } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

// ===================== components =====================
import FallbackComponent from "../components/fallback.component";

// ===================== selectors =====================
import { useAppSelector } from "../../store";
import { dateSelector } from "../layout/store/date.selectors";

const Suspended: FC<PropsWithChildren & { element: any }> = ({
  element: Element,
}) => {
  return (
    <Suspense fallback={<FallbackComponent />}>
      <Element />
    </Suspense>
  );
};

// ======= pages =======
const TrainingListPage = lazy(() => import("./trainingList.page"));

const TrainingListRoutes = () => {
  // ======= selectors =======
  const chosenDate = useAppSelector(dateSelector);

  return (
    <Routes>
      <Route
        path={"/"}
        element={<Navigate to={`/training-list/${chosenDate}`} />}
      />
      <Route
        path={"/:date"}
        element={<Suspended element={TrainingListPage} />}
      />

      {/* DEFAULT */}
      <Route path="*" element={<Navigate to="/training-list" />} />
    </Routes>
  );
};

export default TrainingListRoutes;
