import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

// ===================== mui =====================
import { Grid, Typography } from "@mui/material";

// ===================== store =====================
import { useAppDispatch, useAppSelector } from "../../store";
import {
  addTraining,
  clearChosenTraining,
  deleteTraining,
  getAllTraining,
  setChosenTraining,
  setDayTrainingList,
  updateTraining,
} from "./store/training.slice";
import {
  chosenTrainingSelector,
  dayTrainingListSelector,
  trainingListSelector,
  nextTrainingIdSelector,
} from "./store/training.selectors";
import {
  deleteExercise,
  getAllExercise,
  updateExercise,
} from "../exercise/store/exercise.slice";
import { exerciseListSelector } from "../exercise/store/exercise.selectors";
import { dateSelector } from "../layout/store/date.selectors";

// ===================== types =====================
import { ActivityStatus } from "../../types/activityStatus.enum";
import { ITraining } from "../../types/training.types";
import { setDate } from "../layout/store/date.slice";

// ===================== components =====================
import TrainingCard from "../components/trainingCard.component";
import BoardColumn from "../components/boardLine.component";
import AddButton from "../components/addButton.component";

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
  const nextTrainingId = useAppSelector(nextTrainingIdSelector);
  const exerciseList = useAppSelector(exerciseListSelector);
  const chosenDate = useAppSelector(dateSelector);

  // ===== effects =====
  useEffect(() => {
    if (!isInitialLoading.current) return;

    dispatch(getAllTraining());
    dispatch(getAllExercise());
    isInitialLoading.current = false;
  }, []);

  useEffect(() => {
    if (!date) return;

    dispatch(setDayTrainingList(date));

    if (date !== chosenDate) dispatch(setDate(date));
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

    const exerciseArr = exerciseList?.filter(({ id }) =>
      chosenTraining.exerciseIds.includes(id)
    );
    exerciseArr?.forEach((exercise) => {
      dispatch(updateExercise({ ...exercise, status }));
    });

    dispatch(clearChosenTraining());
  };

  const handleCreateTraining = () => {
    if (!date) return;

    const newTraining: ITraining = {
      id: nextTrainingId,
      status: ActivityStatus.toDo,
      date,
      exerciseIds: [],
    };

    dispatch(addTraining(newTraining));
    dispatch(setChosenTraining(newTraining));
    navigate(`/training/${nextTrainingId}`);
  };

  const handleDeleteTraining = (training: ITraining) => {
    training.exerciseIds.forEach((id) => dispatch(deleteExercise(id)));
    dispatch(deleteTraining(training.id));
    dispatch(clearChosenTraining());
  };

  const handleViewTraining = (training: ITraining) => {
    dispatch(setChosenTraining(training));
    navigate(`/training/${training.id}`);
  };

  // ===== render card function =====
  const renderCard = (training: ITraining) =>
    exerciseList ? (
      <TrainingCard
        key={training.id}
        training={training}
        exercise={exerciseList}
        handleViewTraining={() => handleViewTraining(training)}
        handleDragStart={handleDragStart}
        handleDelete={() => handleDeleteTraining(training)}
      />
    ) : null;

  return (
    <>
      <Typography variant="h4" mt={3}>
        {date} training list board
      </Typography>
      <Grid
        container
        alignSelf={"flex-start"}
        flexGrow={1}
        minHeight={"100%"}
        p={3}
      >
        <BoardColumn status={ActivityStatus.toDo} handleDrop={handleDrop}>
          {toDo.length ? toDo.map(renderCard) : null}
          <AddButton label="Add one more" onClick={handleCreateTraining} />
        </BoardColumn>

        <BoardColumn status={ActivityStatus.inProgress} handleDrop={handleDrop}>
          {inProgress.length ? inProgress.map(renderCard) : null}
        </BoardColumn>

        <BoardColumn status={ActivityStatus.done} handleDrop={handleDrop}>
          {done.length ? done.map(renderCard) : null}
        </BoardColumn>
      </Grid>
    </>
  );
};

export default TrainingListPage;
