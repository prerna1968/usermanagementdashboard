import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../features/auth/authApi";
import { AppRoutes } from "../constants/enum";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, watch, formState: { errors } } = useForm({
    mode: "onChange" || "onSubmit",
  });

  const onSubmit = async (data: any) => {
    try {
        const response = await registerUser(data.email, data.password);
        navigate(AppRoutes.SIGNIN);
      } catch (error) {
        console.error("Failed to login", error);
      }
    navigate("/signin");
  };

  const password = watch("password", "");

  return (
    <Card
      elevation={0}
      sx={{
        position: "absolute",
        backgroundColor: "info.main",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Card
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          marginBottom: "auto",
          marginTop: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          width: "447px",
          height: "fit-content",
        }}
      >
        <CardContent>
          <Stack spacing={4} sx={{ padding: "40px" }}>
            <Stack>
              <Typography variant={"h5"}>SIGN UP FOR THE PORTAL</Typography>
            </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    render={({
                      field: { ref, ...field },
                      fieldState: { invalid, error },
                    }) => (
                      <TextField
                        size="small"
                        label="Email"
                        placeholder={"Enter your email"}
                        onChange={(e: any) => {
                          field.onChange(e);
                        }}
                        error={Boolean(error)}
                        value={field.value ? `${field.value}` : ""}
                        inputRef={ref}
                        helperText={error ? error.message : null}
                        fullWidth
                      />
                    )}
                    name={"email"}
                    control={control}
                    rules={{
                      required: "Email is required",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    render={({
                      field: { ref, ...field },
                      fieldState: { invalid, error },
                    }) => (
                      <TextField
                        size="small"
                        label="Create Password"
                        type="password"
                        placeholder={"Enter your password"}
                        onChange={(e: any) => {
                          field.onChange(e);
                        }}
                        error={Boolean(error)}
                        value={field.value ? `${field.value}` : ""}
                        inputRef={ref}
                        helperText={error ? error.message : null}
                        fullWidth
                      />
                    )}
                    name={"password"}
                    control={control}
                    rules={{
                      required: "Password is required",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    render={({
                      field: { ref, ...field },
                      fieldState: { invalid, error },
                    }) => (
                      <TextField
                        size="small"
                        label="Confirm Password"
                        type="password"
                        placeholder={"Confirm your password"}
                        onChange={(e: any) => {
                          field.onChange(e);
                        }}
                        error={Boolean(error)}
                        value={field.value ? `${field.value}` : ""}
                        inputRef={ref}
                        helperText={error ? error.message : null}
                        fullWidth
                      />
                    )}
                    name={"confirmPassword"}
                    control={control}
                    rules={{
                      required: "Confirm Password is required",
                      validate: value =>
                        value === password || "Passwords do not match",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    size="large"
                    sx={{
                      backgroundColor: "#F26522",
                      color: "white",
                      width: "100%",
                      padding: "10px",
                    }}
                  >
                    SIGN UP
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Stack>
        </CardContent>
      </Card>
    </Card>
  );
};

export default SignUp;
