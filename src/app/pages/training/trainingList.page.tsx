import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

// ===================== mui =====================
import { Button, Grid, Typography } from "@mui/material";

// ===================== store =====================
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  clearChosenTraining,
  getAllTraining,
  setChosenTraining,
  setDayTrainingList,
  updateTraining,
} from "./store/training.slice";
import {
  chosenTrainingSelector,
  dayTrainingListSelector,
  trainingListSelector,
} from "./store/training.selectors";

// ===================== types =====================
import { ActivityStatus } from "../../../types/activityStatus.enum";

// ===================== components =====================
import TrainingCard from "../../components/trainingCard.component";
import BoardColumn from "../../components/boardLine.component";
import { ITraining } from "../../../types/training.types";

const TrainingListPage = () => {
  // ===== hooks =====
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { date } = useParams();
  const isInitialLoading = useRef<boolean>(true);

  // ===== selectors =====
  const { toDo, inProgress, done } = useAppSelector(dayTrainingListSelector);
  const trainingList = useAppSelector(trainingListSelector);
  const chosenTraining = useAppSelector(chosenTrainingSelector);

  // ===== effects =====
  useEffect(() => {
    if (isInitialLoading.current) {
      dispatch(getAllTraining());
      isInitialLoading.current = false;
      return;
    }
  }, []);

  useEffect(() => {
    if (!date) return;
    dispatch(setDayTrainingList(date));
  }, [date, trainingList]);

  // ===== handlers =====
  const handleDragStart = (training: ITraining) => {
    dispatch(setChosenTraining(training));
  };

  const handleDrop = (status: ActivityStatus) => {
    if (!chosenTraining) return;

    const updatedTraining: ITraining = {
      ...chosenTraining,
      status,
    };

    dispatch(updateTraining(updatedTraining));
    dispatch(clearChosenTraining());
  };

  return (
    <>
      <Typography variant="h4" mt={3}>
        {date} training list
      </Typography>
      <Grid
        container
        alignSelf={"flex-start"}
        flexGrow={1}
        minHeight={"100%"}
        p={3}
      >
        <BoardColumn status={ActivityStatus.toDo} handleDrop={handleDrop}>
          {toDo.length
            ? toDo.map((training) => (
                <TrainingCard
                  key={training.id}
                  training={training}
                  navigate={navigate}
                  handleDragStart={handleDragStart}
                />
              ))
            : null}
          <Button
            sx={{
              width: "100%",
              mt: 3,
            }}
            size="small"
            variant="contained"
            color="success"
          >
            Add one more
          </Button>
        </BoardColumn>

        <BoardColumn status={ActivityStatus.inProgress} handleDrop={handleDrop}>
          {inProgress.length
            ? inProgress.map((training) => (
                <TrainingCard
                  key={training.id}
                  training={training}
                  navigate={navigate}
                  handleDragStart={handleDragStart}
                />
              ))
            : null}
        </BoardColumn>

        <BoardColumn status={ActivityStatus.done} handleDrop={handleDrop}>
          {done.length
            ? done.map((training) => (
                <TrainingCard
                  key={training.id}
                  training={training}
                  navigate={navigate}
                  handleDragStart={handleDragStart}
                />
              ))
            : null}
        </BoardColumn>
      </Grid>
    </>
  );
};

export default TrainingListPage;
