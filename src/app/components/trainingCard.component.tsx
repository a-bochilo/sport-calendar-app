// ===================== dnd =====================
import { useDrag } from "react-dnd";

// ===================== mui =====================
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

// ===================== types =====================
import { ITraining } from "../../types/training.types";
import { DndItems } from "../../types/dndItems.enum";

const TrainingCard = ({
  training,
  navigate,
  handleDragStart,
}: {
  training: ITraining;
  navigate: (path: string) => void;
  handleDragStart: (training: ITraining) => void;
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DndItems.card,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Card
      sx={{ mb: 2, cursor: "pointer", opacity: isDragging ? 0.5 : 1 }}
      onDragStart={() => {
        handleDragStart(training);
      }}
      ref={drag}
    >
      <CardContent>
        {training.exerciseIds.map((id) => (
          <Typography key={id} variant="h5" component="p">
            Text {id}
          </Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/training/${training.id}`)}
        >
          View details
        </Button>
      </CardActions>
    </Card>
  );
};

export default TrainingCard;
