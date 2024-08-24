"use client";

import React from "react";
import theme from "@/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

type ThemeProviderWrapperProps = {
  children: React.ReactNode;
};

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="div" sx={{ backgroundColor: "surface" }}>
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
