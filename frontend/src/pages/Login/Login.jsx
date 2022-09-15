import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
const theme = createTheme();

export default function Login() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function changeEmail(event) {
    // const data = new FormData(event.currentTarget);

    setEmail(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(regex.test(email));

    if (regex.test(email)) {
      axios.post("localhost:8080", { email, password });
    }
    // const data = new FormData(event.currentTarget);

    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });

    // setLoginForm({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    console.log(email, password);
  };

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => changeEmail(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => changePassword(e)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
