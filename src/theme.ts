import { createTheme } from "@mui/material/styles";
import { Poppins, Lato, Source_Sans_3 } from "next/font/google";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    onPrimary: string;
    surfaceTint: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    primaryFixed: string;
    onPrimaryFixed: string;
    primaryFixedDim: string;
    onPrimaryFixedVariant: string;
    secondaryFixed: string;
    onSecondaryFixed: string;
    secondaryFixedDim: string;
    onSecondaryFixedVariant: string;
    tertiaryFixed: string;
    onTertiaryFixed: string;
    tertiaryFixedDim: string;
    onTertiaryFixedVariant: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    cash: string;
    bg: string;
  }
  interface Palette {
    onPrimary: string;
    surfaceTint: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    primaryFixed: string;
    onPrimaryFixed: string;
    primaryFixedDim: string;
    onPrimaryFixedVariant: string;
    secondaryFixed: string;
    onSecondaryFixed: string;
    secondaryFixedDim: string;
    onSecondaryFixedVariant: string;
    tertiaryFixed: string;
    onTertiaryFixed: string;
    tertiaryFixedDim: string;
    onTertiaryFixedVariant: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    cash: string;
    bg: string;
  }
}

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const lato = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const source_sans_3 = Source_Sans_3({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

// `extendTheme` is a new API
const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
    body1: {
      lineHeight: 1.65, // Set your desired line height here
    },
    body2: {
      lineHeight: 1.35, // Set your desired line height here
    },
  },
  palette: {
    primary: {
      main: "#7289da",
    },
    surfaceTint: "#AFC6FF",
    onPrimary: "#142F60",
    primaryContainer: "#2E4578",
    onPrimaryContainer: "#D9E2FF",
    secondary: {
      main: "#99aab5",
    },
    onSecondary: "#293042",
    secondaryContainer: "#404659",
    onSecondaryContainer: "#DCE2F9",
    tertiary: "#DFBBDE",
    onTertiary: "#412742",
    tertiaryContainer: "#593D5A",
    onTertiaryContainer: "#FDD7FA",
    error: {
      main: "#f04747",
    },
    onError: "#690005",
    errorContainer: "#93000A",
    onErrorContainer: "#FFDAD6",
    onBackground: "#E2E2E9",
    surface: "#121318",
    onSurface: "#E2E2E9",
    surfaceVariant: "#44464F",
    onSurfaceVariant: "#C5C6D0",
    outline: "#8F9099",
    outlineVariant: "#44464F",
    inverseSurface: "#E2E2E9",
    inverseOnSurface: "#2F3036",
    inversePrimary: "#465D91",
    primaryFixed: "#D9E2FF",
    onPrimaryFixed: "#001944",
    primaryFixedDim: "#AFC6FF",
    onPrimaryFixedVariant: "#2E4578",
    secondaryFixed: "#DCE2F9",
    onSecondaryFixed: "#141B2C",
    secondaryFixedDim: "#BFC6DC",
    onSecondaryFixedVariant: "#404659",
    tertiaryFixed: "#FDD7FA",
    onTertiaryFixed: "#2A132C",
    tertiaryFixedDim: "#DFBBDE",
    onTertiaryFixedVariant: "#593D5A",
    surfaceDim: "#121318",
    surfaceBright: "#38393F",
    surfaceContainerLowest: "#0C0E13",
    surfaceContainerLow: "#1A1B20",
    surfaceContainer: "#1E1F25",
    surfaceContainerHigh: "#282A2F",
    surfaceContainerHighest: "#33353A",
    success: {
      main: "#43b581",
    },
    cash: "#3e9c35",
    bg: "#36393f",
  },
});
export default theme;
