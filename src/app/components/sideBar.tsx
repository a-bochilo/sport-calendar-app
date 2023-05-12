import * as React from "react";

// ===================== mui =====================
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import { primaryMain } from "../../theme/mainTheme.actions";
import theme from "../../theme/mainTheme";

// ====== interfaces ======
interface IDrawerProps extends DrawerProps {
  openedSideBarWidth: number;
  closedSideBarWidth: number;
}

interface ISideBarProps {
  isSideBarOpen: boolean;
  openedSideBarWidth: number;
  closedSideBarWidth: number;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// ====== mixins ======
const openedMixin = (theme: Theme, sideBarWidth: number): CSSObject => ({
  width: sideBarWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme, sideBarWidth: number): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: sideBarWidth,
});

// ====== styled ======
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "60px",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => {
    switch (prop) {
      case "isSideBarOpen":
      case "openedSideBarWidth":
      case "closedSideBarWidth":
        return false;
      default:
        return true;
    }
  },
})<IDrawerProps>(({ theme, open, openedSideBarWidth, closedSideBarWidth }) => ({
  color: "white",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme, openedSideBarWidth),
    "& .MuiDrawer-paper": openedMixin(theme, openedSideBarWidth),
  }),
  ...(!open && {
    ...closedMixin(theme, closedSideBarWidth),
    "& .MuiDrawer-paper": closedMixin(theme, closedSideBarWidth),
  }),
}));

const SideBar = ({
  isSideBarOpen,
  openedSideBarWidth,
  closedSideBarWidth,
  setIsSideBarOpen,
  children,
}: React.PropsWithChildren<ISideBarProps>) => {
  const handleSideBarOpen = () => {
    setIsSideBarOpen(true);
  };
  const handleSideBarClose = () => {
    setIsSideBarOpen(false);
  };

  const MyDrawerHeader = () => {
    return (
      <DrawerHeader>
        {isSideBarOpen ? (
          <IconButton onClick={handleSideBarClose}>
            <ChevronLeftIcon htmlColor={primaryMain({ theme })} />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleSideBarOpen}
            edge="start"
          >
            <MenuIcon htmlColor={primaryMain({ theme })} />
          </IconButton>
        )}
      </DrawerHeader>
    );
  };

  return (
    <Drawer
      variant="permanent"
      open={isSideBarOpen}
      openedSideBarWidth={openedSideBarWidth}
      closedSideBarWidth={closedSideBarWidth}
    >
      <MyDrawerHeader />
      {children}
    </Drawer>
  );
};

export default SideBar;
