import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// ===================== dayjs =====================
import dayjs from "dayjs";

// ===================== mui =====================
import { Grid, Typography } from "@mui/material";

// ===================== store =====================
import { useAppDispatch, useAppSelector } from "../../store";
import {
  chosenExerciseSelector,
  exerciseListSelector,
  nextExerciseIdSelector,
  trainingExerciseListSelector,
} from "../exercise/store/exercise.selectors";
import {
  clearChosenExercise,
  deleteExercise,
  getAllExercise,
  setChosenExercise,
  setTrainingExerciseList,
  updateExercise,
  addExercise,
} from "../exercise/store/exercise.slice";
import { trainingListSelector } from "./store/training.selectors";
import { getAllTraining, updateTraining } from "./store/training.slice";
import { setDate } from "../layout/store/date.slice";
import { forecastSelector } from "../forecast/store/forecast.selectors";

// ===================== types =====================
import { IExercise } from "../../types/exercise.types";
import { ActivityStatus } from "../../types/activityStatus.enum";
import { ITraining } from "../../types/training.types";
import { IForecastItem } from "../../types/api.types";

// ===================== components =====================
import ExerciseCard from "../components/exerciseCard.component";
import BoardColumn from "../components/boardLine.component";
import AddButton from "../components/addButton.component";
import ExerciseForm from "../components/exerciseForm.component";
import WeatherForecast from "../components/forecast.component";

const TrainingPage = () => {
  // ===== hooks =====
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { trainingId } = useParams();
  const isInitialLoading = useRef<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const currentTraining = useRef<ITraining | undefined>(undefined);
  const currentTrainingStatus = useRef<ActivityStatus>();
  const [badForecast, setBadForecast] = useState<IForecastItem | null>(null);

  // ===== selectors =====
  const exerciseList = useAppSelector(exerciseListSelector);
  const trainingList = useAppSelector(trainingListSelector);
  const chosenExercise = useAppSelector(chosenExerciseSelector);
  const nextExerciseId = useAppSelector(nextExerciseIdSelector);
  const forecast = useAppSelector(forecastSelector);
  const { toDo, inProgress, done } = useAppSelector(
    trainingExerciseListSelector
  );

  // ===== effects =====
  useEffect(() => {
    if (isInitialLoading.current) {
      dispatch(getAllTraining());
      dispatch(getAllExercise());
      isInitialLoading.current = false;
      return;
    }
  }, []);

  useEffect(() => {
    if (!trainingId) return;

    if (!trainingList) return;

    if (!trainingList.length) {
      navigate("/training-list");
      return;
    }

    currentTraining.current = trainingList.find(
      (training) => training.id === +trainingId
    );

    if (!currentTraining.current) {
      navigate("/training-list");
      return;
    }

    dispatch(setDate(currentTraining.current.date));

    if (!currentTraining.current.exerciseIds) return;
    dispatch(setTrainingExerciseList(currentTraining.current.exerciseIds));
  }, [trainingId, exerciseList, trainingList, trainingId]);

  useEffect(() => {
    const newStatus = getTrainingStatus();
    if (newStatus === currentTrainingStatus.current) return;
    if (!currentTraining.current) return;

    currentTrainingStatus.current = newStatus;
    dispatch(
      updateTraining({
        ...currentTraining.current,
        status: newStatus,
      })
    );
  }, [toDo, inProgress, done]);

  useEffect(() => {
    if (!currentTraining.current) return;
    if (!forecast.data) return;

    const trainingDay = currentTraining.current.date;

    const isPastTraining = dayjs().isAfter(trainingDay, "day");
    if (isPastTraining) return;

    const trainingDayForecast = forecast.data.list.filter(({ dt_txt }) =>
      dt_txt.startsWith(trainingDay)
    );

    const finalTrainingDayForecast =
      trainingDayForecast.find(({ dt_txt }) => dt_txt.includes("12:00:00")) ||
      trainingDayForecast[0];

    const isForecastBad =
      finalTrainingDayForecast.weather[0].main === "Rain" ||
      finalTrainingDayForecast.main.temp < 283;

    if (!isForecastBad && !badForecast) setBadForecast(null);

    if (isForecastBad) setBadForecast(finalTrainingDayForecast);
  }, [currentTraining.current, forecast.data]);

  // ===== handlers =====
  const handleDragStart = (exercise: IExercise) => {
    dispatch(setChosenExercise(exercise));
  };

  const getTrainingStatus = (): ActivityStatus => {
    if (inProgress.length || (toDo.length && done.length))
      return ActivityStatus.inProgress;
    if (!toDo.length && done.length) return ActivityStatus.done;
    return ActivityStatus.toDo;
  };

  const handleDrop = (status: ActivityStatus) => {
    if (!chosenExercise) return;

    const updatedExercise: IExercise = {
      ...chosenExercise,
      status,
    };

    dispatch(updateExercise(updatedExercise));
    dispatch(clearChosenExercise());
  };

  const handleUpdateExercise = (exercise: IExercise) => {
    dispatch(updateExercise(exercise));
  };

  const handleAddExerciseClick = () => {
    if (!trainingId) return;

    setIsModalOpen(true);
  };

  const handleCreateExercise = (exercise: IExercise) => {
    if (!currentTraining.current) {
      setIsModalOpen(false);
      navigate("/training-list");
      return;
    }

    dispatch(addExercise(exercise));
    dispatch(
      updateTraining({
        ...currentTraining.current,
        exerciseIds: [...currentTraining.current.exerciseIds, exercise.id],
      })
    );

    setIsModalOpen(false);
  };

  const handleDeleteExercise = (exercise: IExercise) => {
    if (!currentTraining.current) {
      navigate("/training-list");
      return;
    }

    dispatch(
      updateTraining({
        ...currentTraining.current,
        exerciseIds: currentTraining.current.exerciseIds.filter(
          (id) => id !== exercise.id
        ),
      })
    );

    dispatch(deleteExercise(exercise.id));
    dispatch(clearChosenExercise());
  };

  // ===== render card function =====
  const renderCard = (exercise: IExercise) => (
    <ExerciseCard
      key={exercise.id}
      exercise={exercise}
      handleDragStart={handleDragStart}
      handleDelete={handleDeleteExercise}
      handleUpdateExercise={handleUpdateExercise}
    />
  );

  return (
    <>
      <Typography variant="h4" mt={3}>
        Training exercise board
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
          <AddButton label="Add one more" onClick={handleAddExerciseClick} />
        </BoardColumn>

        <BoardColumn status={ActivityStatus.inProgress} handleDrop={handleDrop}>
          {inProgress.length ? inProgress.map(renderCard) : null}
        </BoardColumn>

        <BoardColumn status={ActivityStatus.done} handleDrop={handleDrop}>
          {done.length ? done.map(renderCard) : null}
        </BoardColumn>
      </Grid>
      {trainingId ? (
        <ExerciseForm
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          id={nextExerciseId}
          trainingId={+trainingId}
          handleSubmitForm={handleCreateExercise}
        >
          {badForecast && forecast.data ? (
            <WeatherForecast
              city={forecast.data.city.name}
              forecast={badForecast}
            />
          ) : null}
        </ExerciseForm>
      ) : null}
    </>
  );
};

export default TrainingPage;
