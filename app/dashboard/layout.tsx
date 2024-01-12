import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import React from "react";
import "../globals.css";
import SideBar from "@/components/shared/LeftSideBar";
import Navbar from "@/components/shared/Navbar";
import AuthContext from "@/context/AuthContext";
import RightSideBar from "@/components/shared/RightSideBar";

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
      <body className="dark:bg-neutral-950 bg-neutral-100">
        <AuthContext>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            <main className="flex flex-row">
              {/* <LeftSidebar /> */}
              <SideBar />
              <section className="main-container">
                <div className="w-full max-w-4xl">{children}</div>
              </section>
              <RightSideBar />
            </main>
          </ThemeProvider>
        </AuthContext>
      </body>
    </html>
  );
}
