// ===================== dnd =====================
import { useDrag } from "react-dnd";

// ===================== mui =====================
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DoneIcon from "@mui/icons-material/Done";
import ScheduleIcon from "@mui/icons-material/Schedule";

// ===================== types =====================
import { ITraining } from "../../types/training.types";
import { DndItems } from "../../types/dndItems.enum";
import { IExercise } from "../../types/exercise.types";
import { ActivityStatus } from "../../types/activityStatus.enum";

const TrainingCard = ({
  training,
  exercise,
  handleViewTraining,
  handleDragStart,
  handleDelete,
}: {
  training: ITraining;
  exercise: IExercise[];
  handleViewTraining: () => void;
  handleDragStart: (training: ITraining) => void;
  handleDelete: () => void;
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DndItems.card,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const exerciseList = exercise.filter(({ id }) =>
    training.exerciseIds.includes(id)
  );

  const renderStatusIcon = (status: ActivityStatus) => {
    switch (status) {
      case ActivityStatus.toDo:
        return <ScheduleIcon />;
      case ActivityStatus.inProgress:
        return (
          <DirectionsRunIcon
            sx={{
              color: "error.main",
            }}
          />
        );
      case ActivityStatus.done:
        return (
          <DoneIcon
            sx={{
              color: "primary.main",
            }}
          />
        );
      default:
        return status;
    }
  };

  return (
    <Card
      sx={{ mb: 2, cursor: "pointer", opacity: isDragging ? 0.5 : 1 }}
      onDragStart={() => {
        handleDragStart(training);
      }}
      ref={drag}
    >
      <CardContent>
        {exerciseList.map((exercise) => (
          <Grid key={exercise.id} flexDirection={"row"}>
            <Typography
              variant="body1"
              component="p"
              sx={{ display: "inline-block" }}
              mr={1}
            >
              {renderStatusIcon(exercise.status)}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{ display: "inline-block" }}
              mr={3}
            >
              {exercise.type}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ display: "inline-block" }}
              mr={3}
            >
              {exercise.value}x{exercise.sets}
            </Typography>
          </Grid>
        ))}
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Button size="small" onClick={handleViewTraining}>
          View details
        </Button>
        <IconButton onClick={handleDelete}>
          <DeleteForeverIcon sx={{ color: "error.main" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TrainingCard;
