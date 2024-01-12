import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./_components/Footer";
import AuthContext from "@/context/AuthContext";
import {auth} from "@/auth"
import FloatingMode from "@/components/FloatingMode";
export const metadata: Metadata = {
  title: "DevConnector",
  description: "A social network for developers.",
  icons: "/light.jpg",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth()
  return (
    <html lang="en">
      <body
        className="layout-bg"
      >
        <div className="bg-[#fbe2e3] absolute dark:right-14 top-[-6rem] -z-10 right-[14rem] sm:right-[11rem] h-[31.25rem] dark:w-60 w-[31.25rem] blur-[5rem] rounded-full  sm:w-[68.75rem] dark:bg-[#180310]"></div>
        <div className="bg-[#dbd7fb] absolute  dark:top-0 top-[-1rem] -z-10 left-[-30rem] h-[15rem] w-[50rem] rounded-full dark:w-72 md:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] blur-[6rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthContext>{children}</AuthContext>
          {
            !!session?.user && (
              <FloatingMode />
            )
          }
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
