import { useEffect, useMemo, useRef, useState } from "react";

// ===================== mui =====================
import { Card, TextField, Typography } from "@mui/material";

// ===================== store =====================
import { useAppDispatch, useAppSelector } from "../../store";
import { exerciseListSelector } from "../exercise/store/exercise.selectors";
import { trainingListSelector } from "../training/store/training.selectors";

// ===================== types =====================
import { ILoginForm } from "../../types/login.types";
import { ActivityStatus } from "../../types/activityStatus.enum";
import ChartPie from "../components/chartPie.component";
import { getAllTraining } from "../training/store/training.slice";
import { getAllExercise } from "../exercise/store/exercise.slice";

const ProfilePage = () => {
  // ====== selectors ======
  const exerciseList = useAppSelector(exerciseListSelector);
  const trainingList = useAppSelector(trainingListSelector);

  // ====== hooks ======
  const dispatch = useAppDispatch();
  const isInitialLoading = useRef<boolean>(true);
  const [currentUser, setCurrentUser] = useState<ILoginForm | null>(null);

  useEffect(() => {
    if (!isInitialLoading.current) return;
    dispatch(getAllTraining());
    dispatch(getAllExercise());

    const userFromLS = window.localStorage.getItem("user");
    if (!userFromLS) return;
    setCurrentUser(JSON.parse(userFromLS) as ILoginForm);
    isInitialLoading.current = false;
  }, []);

  // ===== data =====
  const { toDoExercise, inProgressExercise, doneExercise } = useMemo(() => {
    const result = {
      toDoExercise: 0,
      inProgressExercise: 0,
      doneExercise: 0,
    };
    if (!exerciseList) return result;

    exerciseList.forEach((exercise) => {
      switch (exercise.status) {
        case ActivityStatus.toDo:
          result.toDoExercise++;
          break;
        case ActivityStatus.inProgress:
          result.inProgressExercise++;
          break;
        case ActivityStatus.done:
          result.doneExercise++;
          break;
      }
    });
    return result;
  }, [exerciseList]);

  const { toDoTraining, inProgressTraining, doneTraining } = useMemo(() => {
    const result = {
      toDoTraining: 0,
      inProgressTraining: 0,
      doneTraining: 0,
    };
    if (!trainingList) return result;

    trainingList.forEach((training) => {
      switch (training.status) {
        case ActivityStatus.toDo:
          result.toDoTraining++;
          break;
        case ActivityStatus.inProgress:
          result.inProgressTraining++;
          break;
        case ActivityStatus.done:
          result.doneTraining++;
          break;
      }
    });
    return result;
  }, [trainingList]);

  // ===== render =====
  const renderTextField = (label: string, value: string) => (
    <TextField
      sx={{
        width: "100%",
        mb: 2,
      }}
      key={label}
      label={label}
      size="small"
      variant="outlined"
      value={value}
      disabled
    />
  );

  return (
    <>
      {toDoTraining || inProgressTraining || doneTraining ? (
        <ChartPie
          label="Training"
          propsData={[toDoTraining, inProgressTraining, doneTraining]}
        />
      ) : null}
      {toDoExercise || inProgressExercise || doneExercise ? (
        <ChartPie
          label="Exercise"
          propsData={[toDoExercise, inProgressExercise, doneExercise]}
        />
      ) : null}
      <Card
        sx={{
          p: 2,
          mt: 2,
          mr: 2,
          ml: "auto",
          display: "block",
          alignSelf: "flex-start",
        }}
      >
        <Typography variant="h6" pb={2}>
          Personal data
        </Typography>
        {currentUser
          ? Object.entries(currentUser).map(([key, value]) =>
              renderTextField(key, value)
            )
          : null}
      </Card>
    </>
  );
};

export default ProfilePage;
