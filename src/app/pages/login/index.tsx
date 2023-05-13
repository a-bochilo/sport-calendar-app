import { useState } from "react";

// ===================== mui =====================
import {
  AppBar,
  Grid,
  Typography,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  styled,
} from "@mui/material";
import {
  primaryLight,
  primaryBackground,
} from "../../../theme/mainTheme.actions";

// ===================== types =====================
import { AuthType } from "../../../types/auth.types";
import LoginForm from "../../components/loginForm.component";

// ======= styled =======
const StyledButtonGroup = styled(ToggleButtonGroup)`
  width: 100%;
  padding-bottom: 20px;

  button {
    width: 100%;

    background-color: ${primaryBackground};
    &[aria-pressed="true"] {
      background-color: ${primaryLight};
    }
  }
`;

const LoginPage = () => {
  // ===== hooks =====
  const [authType, setAuthType] = useState<AuthType>("Log in");

  // ===== handlers =====
  const handleAuthTypeChange = (
    _: React.MouseEvent<HTMLElement>,
    newType: AuthType
  ) => {
    if (!newType) return;
    setAuthType(newType);
  };

  return (
    <Grid
      container
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: "100%",
        alignItems: "center",
      }}
      component="main"
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
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: 400,
            maxWidth: "90%",
            p: 3,
            height: "max-content",
            textAlign: "center",
          }}
        >
          <StyledButtonGroup
            value={authType}
            exclusive
            onChange={handleAuthTypeChange}
            aria-label="Auth type"
            size="small"
          >
            <ToggleButton value="Log in">Log in</ToggleButton>
            <ToggleButton value="Sign up">Sign up</ToggleButton>
          </StyledButtonGroup>
          <LoginForm type={authType} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
