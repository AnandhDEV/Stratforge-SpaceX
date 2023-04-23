import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },

  palette: {
    mode: "dark",

    primary: { main: "#cf96b5", contrastText: "#fff" },
    secondary: { main: "#fb9678", contrastText: "#fff" },
    grey: { main: "#5a5670" },

    white: { main: "#fff", contrastText: "#fff" },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    text: {
      primary: "#fff",
    },
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "system-ui",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Web"',
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.125rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "0.8rem",
    },
    h4: {
      fontSize: "0.6rem",
    },
    h5: {
      fontSize: "0.8rem",
    },
    label: {
      fontSize: "12px",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
