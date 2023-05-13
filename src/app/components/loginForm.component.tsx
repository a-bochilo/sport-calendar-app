import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ===================== hook form =====================
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// ===================== yup =====================
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./loginForm.const";

// ===================== mui =====================
import { Typography, TextField, Button } from "@mui/material";

// ===================== types =====================
import { AuthType } from "../../types/auth.types";

interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = ({ type }: { type: AuthType }) => {
  // ===== hooks =====
  const [authError, setAuthError] = useState<string | null>(null);
  const navigate = useNavigate();

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

    if (type === "Sign up") {
      window.localStorage.setItem("user", JSON.stringify(data));
      window.localStorage.setItem("token", "true");
      navigate("/training");
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
    navigate("/training");
  };

  return (
    <>
      <Typography variant="h4" pb={3}>
        {type}
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
          {type}
        </Button>
        {authError ? (
          <Typography variant="body2" color="error">
            {authError}
          </Typography>
        ) : null}
      </form>
    </>
  );
};

export default LoginForm;
