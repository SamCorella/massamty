import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Logo from "../components/Logo";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../index";

const defaultTheme = createTheme();

function CreateAccount() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        try {
          const docRef = await addDoc(collection(db, "users"), {
            id: user.uid,
            first: data.get("firstName"),
            last: data.get("lastName"),
            email: email,
            role: data.get("radio-buttons-group"),
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Logo />
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker label="Date of Birth" />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>User Type</FormLabel>
                  <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    defaultValue="Accountant"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Accountant"
                      control={<Radio />}
                      label="Accountant"
                    />
                    <FormControlLabel
                      value="Manager"
                      control={<Radio />}
                      label="Manager"
                    />
                    <FormControlLabel
                      value="Administrator"
                      control={<Radio />}
                      label="Administrator"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CreateAccount;
