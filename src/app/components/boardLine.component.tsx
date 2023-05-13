import { PropsWithChildren } from "react";

// ===================== dnd =====================
import { useDrop } from "react-dnd";

// ===================== mui =====================
import { Grid, Typography } from "@mui/material";
import { primaryLight } from "../../theme/mainTheme.actions";
import theme from "../../theme/mainTheme";

// ===================== types =====================
import { ActivityStatus } from "../../types/activityStatus.enum";
import { DndItems } from "../../types/dndItems.enum";

const BoardColumn = ({
  status,
  handleDrop,
  children,
}: PropsWithChildren<{
  status: ActivityStatus;
  handleDrop: (status: ActivityStatus) => void;
}>) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: DndItems.card,
      drop: () => {
        handleDrop(status);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        item: monitor.getItem(),
      }),
    }),
    [status, handleDrop]
  );

  return (
    <Grid
      item
      sm={4}
      ref={drop}
      sx={{
        borderLeft: "solid 1px",
        borderRight: "solid 1px",
        borderColor: primaryLight({ theme }),
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        pl: 3,
        pr: 3,
        position: "relative",
      }}
    >
      <Typography variant="h5" align="center" mb={2}>
        {status}
      </Typography>
      {children}
      {isOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            opacity: 0.1,
            backgroundColor: primaryLight({ theme }),
          }}
        />
      )}
    </Grid>
  );
};

export default BoardColumn;
