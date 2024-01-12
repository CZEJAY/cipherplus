import React from "react";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AuthContext from "@/context/AuthContext";
import FloatingMode from "@/components/FloatingMode";
import Welcome from "@/components/Welcome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevConnector | Authentication",
  description: "A social network for developers.",
  icons: "/light.jpg",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="layout-bg">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthContext>
            <div className="container relative flex h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
              <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-black" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                  Devconnector Inc
                </div>
                <Welcome />
                <div className="relative z-20 mt-auto">
                  <blockquote className="space-y-2">
                    <p className="text-lg">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut ullam culpa esse animi illum, corrupti qui quae nam saepe alias ipsa a cupiditate inventore laudantium iure non facilis velit.
                    </p>
                    <footer className="text-sm">
                      &copy; 2030 DevConnector. All rights reserved.
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="lg:p-8 relative ">
                <div className="bg-[#f082e544] hidden md:block absolute top-[-6rem] -z-10 left-0 h-[20rem]   w-[30rem] blur-[5rem] rounded-full dark:bg-[#71299256]"></div>
                <div className="bg-[#5849df56] hidden md:block absolute bottom-2 md:bottom-0 -z-10 -right-16 md:right-0 h-[15rem] w-[30rem] rounded-full blur-[5rem] dark:bg-[#31091a93]"></div>
                {children}
              </div>
            </div>
          </AuthContext>
          <FloatingMode />
        </ThemeProvider>
      </body>
    </html>
  );
}
