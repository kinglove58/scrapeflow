import { ThemeProvider } from "next-themes";
import React from "react";

function AppProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class" defaultTheme="">

  </ThemeProvider>
}

export default AppProviders;
