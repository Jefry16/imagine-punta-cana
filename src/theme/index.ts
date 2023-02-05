import { createTheme } from "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}
export const theme = createTheme({
  palette: {
    primary: { main: "#FF82A8", light: "#FF9EBB", dark: "#FF5589" },
    grey: {
      "100": "#D8DAE3",
      "200": "#8D91A0",
      "300": "#4F515A",
      "400": "#34363C",
      "500": "#242529",
      "600": "#161819",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#FF82A8",
            color: "white",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: ({ theme }) => ({
          ".MuiDataGrid-columnHeader": {
            background: "#34363B",
            color: "white",
          },
          ".MuiDataGrid-checkboxInput": { color: "white" },
          ".MuiDataGrid-row": {
            background: theme.palette.grey[500],
            color: "white",
            "&:hover": { color: "black" },
            "&.Mui-selected": {},
          },
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({ color: "white" }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({}) => ({ color: "white" }),
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          input: {
            color: theme.palette.primary.main,
            background: "grey",
          },
        }),
      },
    },

    MuiFormControlLabel: {
      styleOverrides: { root: ({}) => ({ color: "white" }) },
    },
  },
});
