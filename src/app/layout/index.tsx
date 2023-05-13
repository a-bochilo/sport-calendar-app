import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// ===================== mui =====================
import { AppBar, Grid, Typography } from "@mui/material";

// ===================== dayjs =====================
import dayjs, { Dayjs } from "dayjs";

// ===================== components =====================
import { useAppDispatch, useAppSelector } from "../../store";
import { setDate } from "./store/date.slice";
import { dateSelector } from "./store/date.selectors";

// ===================== components =====================
import SideBar from "../components/sideBar.component";
import GridContentContainer from "../components/gridContentContainer.component";
import CalendarComponent from "../components/calendar.component";

const Layout = () => {
  // ====== selectors ======
  const chosenDate = useAppSelector(dateSelector);

  // ====== hooks ======
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isInitialLoading = useRef<boolean>(true);
  useEffect(() => {
    if (!isInitialLoading.current) return;
    if (!chosenDate) dispatch(setDate(dayjs().format("DD-MM-YYYY")));
    isInitialLoading.current = false;
  }, []);

  const openedSideBarWidth = 350;
  const closedSideBarWidth = 50;

  // ====== handlers ======
  const handleChooseDate = (date: Dayjs | null): void => {
    if (date) {
      dispatch(setDate(date.format("DD-MM-YYYY")));
      navigate(`/training-list/${date.format("DD-MM-YYYY")}`);
    }
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
        <Grid
          container
          spacing={1}
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Outlet />
        </Grid>
      </GridContentContainer>
    </Grid>
  );
};

export default Layout;
