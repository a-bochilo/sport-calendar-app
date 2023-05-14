// ===================== mui =====================
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

// ===================== dayjs =====================
import dayjs, { Dayjs } from "dayjs";

const CalendarComponent = ({
  chosenDate,
  handleChooseDate,
}: {
  chosenDate: string;
  handleChooseDate: (date: Dayjs | null) => void;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={dayjs(chosenDate)}
        onChange={(newValue: Dayjs | null) => handleChooseDate(newValue)}
      />
    </LocalizationProvider>
  );
};

export default CalendarComponent;
