// ===================== hook form =====================
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// ===================== yup =====================
import { yupResolver } from "@hookform/resolvers/yup";
import { createFormSchema, updateFormSchema } from "./exerciseForm.const";

// ===================== mui =====================
import {
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Dialog,
} from "@mui/material";

// ===================== types =====================
import { ExerciseTypes, IExercise } from "../../types/exercise.types";
import { ActivityStatus } from "../../types/activityStatus.enum";
import { PropsWithChildren } from "react";

const ExerciseForm = ({
  open,
  handleClose,
  id,
  trainingId,
  handleSubmitForm,
  exercise,
  children,
}: PropsWithChildren<{
  open: boolean;
  handleClose: () => void;
  id: number;
  trainingId: number;
  handleSubmitForm: (exercise: IExercise) => void;
  exercise?: IExercise;
}>) => {
  // ===== hook form =====
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<Omit<IExercise, "id" | "trainingId">>({
    mode: "all",
    resolver: exercise
      ? yupResolver(updateFormSchema)
      : yupResolver(createFormSchema),
  });

  const onSubmit: SubmitHandler<Omit<IExercise, "id" | "trainingId">> = async (
    data
  ) => {
    const exercise: IExercise = { ...data, id, trainingId };
    handleSubmitForm(exercise);
    reset();
    handleClose();
  };

  const getValueFieldLabel = (type: ExerciseTypes) => {
    switch (type) {
      case ExerciseTypes.running:
        return "Distance, m";
      case ExerciseTypes.plank:
        return "Time, sec";
      default:
        return "Rep per set, rep";
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Paper
        sx={{
          width: 300,
          justifyContent: "center",
          p: 3,
          height: "max-content",
        }}
      >
        <Typography variant="h6" pb={3}>
          Add exercise
        </Typography>
        {watch("type") === ExerciseTypes.running ? children : null}

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {/* Type select */}
          <Controller
            name="type"
            control={control}
            render={() => (
              <TextField
                sx={{
                  width: "100%",
                }}
                id="type"
                label="Select type"
                select
                size="small"
                defaultValue={exercise?.type ?? ExerciseTypes.pullups}
                variant="outlined"
                InputProps={{
                  readOnly: !!exercise,
                  className: !!exercise ? "Mui-disabled" : undefined,
                }}
                {...register("type")}
              >
                <MenuItem
                  key={ExerciseTypes.pullups}
                  value={ExerciseTypes.pullups}
                >
                  Pull-ups
                </MenuItem>

                <MenuItem
                  key={ExerciseTypes.pushups}
                  value={ExerciseTypes.pushups}
                >
                  Push-ups
                </MenuItem>

                <MenuItem
                  key={ExerciseTypes.squats}
                  value={ExerciseTypes.squats}
                >
                  Squats
                </MenuItem>

                <MenuItem
                  key={ExerciseTypes.running}
                  value={ExerciseTypes.running}
                >
                  Running
                </MenuItem>

                <MenuItem key={ExerciseTypes.plank} value={ExerciseTypes.plank}>
                  Plank
                </MenuItem>
              </TextField>
            )}
          />

          {/* Fields */}
          <Controller
            name="value"
            control={control}
            render={() => (
              <TextField
                sx={{
                  width: "100%",
                }}
                id="value"
                label={getValueFieldLabel(watch("type"))}
                type="number"
                size="small"
                variant="outlined"
                defaultValue={exercise?.value ?? ""}
                {...register("value")}
              />
            )}
          />
          {errors.value ? (
            <Typography variant="body2" color="error">
              {errors.value.message}
            </Typography>
          ) : null}

          <Controller
            name="sets"
            control={control}
            render={() => (
              <TextField
                sx={{
                  width: "100%",
                }}
                id="sets"
                label="Sets"
                size="small"
                variant="outlined"
                type="number"
                defaultValue={exercise?.sets ?? 1}
                disabled={watch("type") === ExerciseTypes.running}
                {...register("sets")}
              />
            )}
          />
          {errors.sets ? (
            <Typography variant="body2" color="error">
              {errors.sets.message}
            </Typography>
          ) : null}

          {/* Status select */}
          <Controller
            name="status"
            control={control}
            render={() => (
              <TextField
                sx={{
                  width: "100%",
                }}
                id="status"
                label="Select status"
                select
                size="small"
                defaultValue={exercise?.status ?? ActivityStatus.toDo}
                variant="outlined"
                {...register("status")}
              >
                <MenuItem key={ActivityStatus.toDo} value={ActivityStatus.toDo}>
                  {ActivityStatus.toDo}
                </MenuItem>

                <MenuItem
                  key={ActivityStatus.inProgress}
                  value={ActivityStatus.inProgress}
                >
                  {ActivityStatus.inProgress}
                </MenuItem>

                <MenuItem key={ActivityStatus.done} value={ActivityStatus.done}>
                  {ActivityStatus.done}
                </MenuItem>
              </TextField>
            )}
          />

          <Button
            sx={{
              width: "100%",
            }}
            size="small"
            type="submit"
            variant="contained"
            color="success"
            disabled={!isValid}
          >
            Save
          </Button>
        </form>
      </Paper>
    </Dialog>
  );
};

export default ExerciseForm;
