import { FC, PropsWithChildren, Suspense, lazy } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

// ===================== components =====================
import FallbackComponent from "../components/fallback.component";

// ===================== selectors =====================
import { useAppSelector } from "../../store";
import { chosenTrainingSelector } from "./store/training.selectors";

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
const TrainingPage = lazy(() => import("./training.page"));

const TrainingRoutes = () => {
  // ======= selectors =======
  const chosenTraining = useAppSelector(chosenTrainingSelector);

  return (
    <Routes>
      <Route
        path={"/"}
        element={<Navigate to={`/training/${chosenTraining?.id}`} />}
      />
      <Route
        path={"/:trainingId"}
        element={<Suspended element={TrainingPage} />}
      />

      {/* DEFAULT */}
      <Route path="*" element={<Navigate to="/training-list" />} />
    </Routes>
  );
};

export default TrainingRoutes;
