import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ===================== hook form =====================
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// ===================== yup =====================
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./loginForm.const";

// ===================== mui =====================
import {
  Typography,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Paper,
  styled,
} from "@mui/material";
import {
  primaryLight,
  primaryBackground,
} from "../../../theme/mainTheme.actions";

// ===================== types =====================
import { AuthType } from "../../../types/auth.types";

interface ILoginForm {
  email: string;
  password: string;
}

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
  const [authError, setAuthError] = useState<string | null>(null);
  const navigate = useNavigate();

  // ===== handlers =====
  const handleAuthTypeChange = (
    _: React.MouseEvent<HTMLElement>,
    newType: AuthType
  ) => {
    if (!newType) return;
    setAuthType(newType);
  };

  // ===== hook form =====
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginForm>({
    mode: "all",
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<ILoginForm> = async (data: ILoginForm) => {
    setAuthError(null);

    if (authType === "Sign up") {
      window.localStorage.setItem("user", JSON.stringify(data));
      window.localStorage.setItem("token", "true");
      navigate("/training-list");
      return;
    }

    const userFromLS = window.localStorage.getItem("user");
    if (!userFromLS) {
      setAuthError("You should register first");
      return;
    }
    const userData = JSON.parse(userFromLS) as ILoginForm;
    const isVerified =
      userData.email === data.email && userData.password === data.password;

    if (!isVerified) {
      setAuthError("Not authorized. Incorrect data");
      return;
    }

    window.localStorage.setItem("token", "true");
    navigate("/training-list");
  };

  return (
    <>
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

        <Typography variant="h4" pb={3}>
          {authType}
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Controller
            name="email"
            control={control}
            render={() => (
              <TextField
                sx={{
                  width: "100%",
                }}
                id="email"
                label="email"
                type="email"
                placeholder="email@email.com"
                size="small"
                variant="outlined"
                {...register("email")}
              />
            )}
          />
          {errors.email ? (
            <Typography variant="body2" color="error">
              {errors.email.message}
            </Typography>
          ) : null}

          <Controller
            name="password"
            control={control}
            render={() => (
              <TextField
                sx={{
                  width: "100%",
                }}
                id="password"
                label="password"
                type="password"
                placeholder="email@email.com"
                size="small"
                variant="outlined"
                {...register("password")}
              />
            )}
          />
          {errors.password ? (
            <Typography variant="body2" color="error">
              {errors.password.message}
            </Typography>
          ) : null}

          <Button
            sx={{
              width: "100%",
            }}
            size="small"
            type="submit"
            variant="contained"
            color="success"
            disabled={!isValid}
          >
            {authType}
          </Button>

          {authError ? (
            <Typography variant="body2" color="error">
              {authError}
            </Typography>
          ) : null}
        </form>
      </Paper>
    </>
  );
};

export default LoginPage;
