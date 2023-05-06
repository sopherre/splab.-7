import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#505050",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
    },
  },
});

interface Props {
  children: React.ReactNode;
}
export const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
