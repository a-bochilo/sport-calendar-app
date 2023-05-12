import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

// ===================== mui =====================
import { AppBar, Grid, Typography } from "@mui/material";

// ===================== dayjs =====================
import dayjs, { Dayjs } from "dayjs";

// ===================== components =====================
import { useAppDispatch, useAppSelector } from "../../store";
import { setDate } from "./store/date.slice";
import { dateSelector } from "./store/date.selectors";

// ===================== components =====================
import SideBar from "../components/sideBar";
import GridContentContainer from "../components/gridContentContainer";
import CalendarComponent from "../components/calendarComponent";

const Layout = () => {
  // ====== selectors ======
  const chosenDate = useAppSelector(dateSelector);

  // ====== hooks ======
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const isInitialLoading = useRef<boolean>(true);
  useEffect(() => {
    if (!isInitialLoading.current) return;
    if (!chosenDate) dispatch(setDate(dayjs().valueOf()));
    isInitialLoading.current = false;
  }, []);

  const openedSideBarWidth = 350;
  const closedSideBarWidth = 50;

  // ====== handlers ======
  const handleChooseDate = (date: Dayjs | null): void => {
    if (date) dispatch(setDate(date.valueOf()));
  };

  return (
    <Grid container sx={{ flexGrow: 1 }} component="main">
      <SideBar
        isSideBarOpen={isSideBarOpen}
        openedSideBarWidth={openedSideBarWidth}
        closedSideBarWidth={closedSideBarWidth}
        setIsSideBarOpen={setIsSideBarOpen}
      >
        {isSideBarOpen ? (
          <CalendarComponent handleChooseDate={handleChooseDate} />
        ) : null}
      </SideBar>
      <GridContentContainer
        item
        isSideBarOpen={isSideBarOpen}
        openedSideBarWidth={openedSideBarWidth}
        closedSideBarWidth={closedSideBarWidth}
      >
        <AppBar
          color="primary"
          position="sticky"
          component="header"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "65px",
          }}
        >
          <Typography variant="h4" component="h1">
            Sport Calendar
          </Typography>
        </AppBar>
        <Outlet />
      </GridContentContainer>
    </Grid>
  );
};

export default Layout;
