import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#042144",
      light: "#8290a2",
      dark: "#021122",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00a99d",
      light: "#e6f6f5",
      dark: "#00655e",
      contrastText: "#000",
    },
    text: {
      primary: "#042144",
      secondary: "#1d3757",
      disabled: "#8290a2",
    },
  },
});

const MuiThemeProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default MuiThemeProvider;