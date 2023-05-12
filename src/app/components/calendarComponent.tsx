// ===================== mui =====================
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

// ===================== dayjs =====================
import { Dayjs } from "dayjs";

const CalendarComponent = ({
  handleChooseDate,
}: {
  handleChooseDate: (date: Dayjs | null) => void;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        onChange={(newValue: Dayjs | null) => handleChooseDate(newValue)}
      />
    </LocalizationProvider>
  );
};

export default CalendarComponent;
