import { useState } from "react";

// ===================== dnd =====================
import { useDrag } from "react-dnd";

// ===================== mui =====================
import {
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// ===================== types =====================
import { DndItems } from "../../types/dndItems.enum";
import { IExercise } from "../../types/exercise.types";

// ===================== components =====================
import ExerciseForm from "./exerciseForm.component";

const ExerciseCard = ({
  exercise,
  handleDragStart,
  handleDelete,
  handleUpdateExercise,
}: {
  exercise: IExercise;
  handleDragStart: (exercise: IExercise) => void;
  handleDelete: (exercise: IExercise) => void;
  handleUpdateExercise: (exercise: IExercise) => void;
}) => {
  // ===== hooks =====
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // ===== dnd =====
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DndItems.card,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // ===== render =====
  const renderTextField = (
    label: string,
    value: IExercise[keyof IExercise]
  ) => (
    <TextField
      sx={{
        width: "100%",
        mb: 2,
      }}
      label={label}
      size="small"
      variant="outlined"
      value={value}
      disabled
    />
  );

  return (
    <>
      <Card
        sx={{ mb: 2, cursor: "pointer", opacity: isDragging ? 0.5 : 1 }}
        onDragStart={() => {
          handleDragStart(exercise);
        }}
        ref={drag}
      >
        <CardContent>
          {renderTextField("Type", exercise.type)}
          {renderTextField("Value", exercise.value)}
          {renderTextField("Sets", exercise.sets)}
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Button size="small" onClick={() => setIsModalOpen(true)}>
            Edit
          </Button>
          <IconButton onClick={() => handleDelete(exercise)}>
            <DeleteForeverIcon sx={{ color: "error.main" }} />
          </IconButton>
        </CardActions>
      </Card>
      <ExerciseForm
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        id={exercise.id}
        trainingId={exercise.trainingId}
        handleSubmitForm={handleUpdateExercise}
        exercise={exercise}
      />
    </>
  );
};

export default ExerciseCard;
