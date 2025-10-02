import { ReactNode } from "react";

import {
  createTheme,
  SxProps,
  Theme,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useMediaQuery } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    insets: {
      horizontal: number;
      page: {
        horizontal: number;
      };
      section: {
        vertical: number;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    insets?: {
      horizontal: number;
      page: {
        horizontal: number;
      };
      section: {
        vertical: number;
      };
    };
  }
}

type Sheet<T> = {
  [P in keyof T]: SxProps<Theme>;
};

export class MuiSheet {
  static create<T extends { [key: string]: SxProps<Theme> }>(
    sheet: T
  ): Sheet<T> {
    return sheet;
  }
}

interface AppThemeProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1f1a7f",
    },
    secondary: {
      main: "#FFB410",
    },
  },
});

export function AppThemeProvider(props: AppThemeProviderProps) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <Extended>{children}</Extended>
    </ThemeProvider>
  );
}

function Extended({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <ThemeProvider
      theme={(theme: Theme) =>
        createTheme({
          ...theme,
          insets: {
            horizontal: lg ? 14 : 2.5,
            page: {
              horizontal: lg ? 14 : 2.5,
            },
            section: {
              vertical: 10,
            },
          },
        })
      }
    >
      {children}
    </ThemeProvider>
  );
}
