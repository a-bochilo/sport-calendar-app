import { useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// ===================== mui =====================
import { AppBar, Grid, Typography, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

// ===================== dayjs =====================
import dayjs, { Dayjs } from "dayjs";

// ===================== store =====================
import { useAppDispatch, useAppSelector } from "../../store";
import { setDate } from "./store/date.slice";
import { dateSelector } from "./store/date.selectors";
import { fetchWeatherForecast } from "../forecast/store/forecast.actions";

// ===================== components =====================
import SideBar from "../components/sideBar.component";
import GridContentContainer from "../components/gridContentContainer.component";
import CalendarComponent from "../components/calendar.component";

// ===================== types =====================
import { IApiWeaterGetProps } from "../../types/api.types";

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

    if (!chosenDate) dispatch(setDate(dayjs().format("YYYY-MM-DD")));

    navigator.geolocation.getCurrentPosition((position) => {
      const props: IApiWeaterGetProps = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      dispatch(fetchWeatherForecast(props));
    });

    isInitialLoading.current = false;
  }, []);

  const openedSideBarWidth = 350;
  const closedSideBarWidth = 50;

  // ====== handlers ======
  const handleChooseDate = useCallback(
    (date: Dayjs | null): void => {
      if (date) {
        dispatch(setDate(date.format("YYYY-MM-DD")));
        navigate(`/training-list/${date.format("YYYY-MM-DD")}`);
      }
    },
    [dispatch, navigate]
  );

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
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
          <CalendarComponent
            chosenDate={chosenDate}
            handleChooseDate={handleChooseDate}
          />
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
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "65px",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}
          >
            Sport Calendar
          </Typography>
          <IconButton
            onClick={() => navigate("/profile")}
            sx={{ mr: 2, color: "white" }}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handleLogout} sx={{ mr: 6, color: "white" }}>
            <LogoutIcon fontSize="large" />
          </IconButton>
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
