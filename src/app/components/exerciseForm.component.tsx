import { useParams } from "react-router-dom";

// ===================== hook form =====================
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// ===================== yup =====================
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./exerciseForm.const";

// ===================== mui =====================
import { Paper, Typography, TextField, Button, MenuItem } from "@mui/material";

// ===================== types =====================
import { ExerciseTypes, IExercise } from "../../types/exercise.types";
import { ActivityStatus } from "../../types/activityStatus.enum";

const ExerciseForm = () => {
  // ===== params =====
  const { trainigId } = useParams();

  // ===== hook form =====
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Omit<IExercise, "id" | "date" | "trainingId">>({
    mode: "all",
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<
    Omit<IExercise, "id" | "date" | "trainingId">
  > = async (data) => {
    if (trainigId) Object.assign(data, { trainigId: +trainigId });
    console.log(data);
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
    <Paper
      sx={{
        width: 400,
        maxWidth: "90%",
        justifyContent: "center",
        p: 3,
        height: "max-content",
      }}
    >
      <Typography variant="h6" pb={3}>
        Add exercise
      </Typography>

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
              defaultValue={ExerciseTypes.pullups}
              variant="outlined"
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

              <MenuItem key={ExerciseTypes.squats} value={ExerciseTypes.squats}>
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
              defaultValue={1}
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
              defaultValue={ActivityStatus.toDo}
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
          Add
        </Button>
      </form>
    </Paper>
  );
};

export default ExerciseForm;
