import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import React from "react";
import "../globals.css";
import Siderbar from "./_components/Siderbar";
import RightSideBar from "@/components/shared/RightSideBar";
import Header from "./_components/header";
import AuthContext from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "DevConnector",
  description: "A social network for developers.",
  icons: "/light.jpg",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-light-2">
        <AuthContext>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex flex-row">
              {/* <LeftSidebar /> */}
              <Siderbar />
              <Header />
              <section className="main-container">
                <div className="w-full max-w-4xl">{children}</div>
              </section>
              {/* <RightSideBar /> */}
            </main>
          </ThemeProvider>
        </AuthContext>
      </body>
    </html>
  );
}
