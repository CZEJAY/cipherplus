import React from "react";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AuthContext from "@/context/AuthContext";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthContext>{children}</AuthContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
