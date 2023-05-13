import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store";
import { getAllTraining } from "./store/training.slice";
import { trainingListSelector } from "./store/training.selectors";

const TrainingListPage = () => {
  // ===== hooks =====
  const dispatch = useAppDispatch();
  const { date } = useParams();
  const isInitialLoading = useRef<boolean>(true);

  // ===== selectors =====
  const trainingList = useAppSelector(trainingListSelector);

  useEffect(() => {
    if (isInitialLoading.current) {
      dispatch(getAllTraining);
      isInitialLoading.current = false;
      return;
    }
  }, []);

  useEffect(() => {
    
  }, [date]);

  return (
    <>
      <h2>Training {date}</h2>
    </>
  );
};

export default TrainingListPage;
