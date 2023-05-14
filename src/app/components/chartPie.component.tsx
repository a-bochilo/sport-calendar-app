// ===================== mui =====================
import { Box, Typography } from "@mui/material";
import { primaryLight, errorMain } from "../../theme/mainTheme.actions";
import theme from "../../theme/mainTheme";

// ===================== types =====================
import { ActivityStatus } from "../../types/activityStatus.enum";

// ===================== chart.js =====================
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartPie = ({
  label,
  propsData,
}: {
  label: string;
  propsData: [number, number, number];
}) => {
  const data = {
    labels: [
      ActivityStatus.toDo,
      ActivityStatus.inProgress,
      ActivityStatus.done,
    ],
    datasets: [
      {
        label: label,
        data: propsData,
        backgroundColor: [
          errorMain({ theme }),
          "yellow",
          primaryLight({ theme }),
        ],
      },
    ],
  };

  return (
    <Box width={300} height={400} p={3} m={5}>
      <Typography variant="h6" pb={2}>
        {label}
      </Typography>
      <Pie data={data} />
    </Box>
  );
};

export default ChartPie;
