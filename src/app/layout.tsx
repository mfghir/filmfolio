import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/lib/theme-provider";
import SessionProviderComp from "@/lib/session-provider";
import TanstackProvider from "@/lib/tanstack-provider";

import connectDB from "@/lib/connectDB";
import User from "@/models/user";
import { getServerSession } from "next-auth";

import { authOptions } from "@/auth-options";
import GoogleTranslateProvider from "@/utilities/google-translate";
import Navbar from "@/templates/navbar/navbar";

import Footer from "@/templates/footer";
import { Toaster } from "@/components/ui/toaster";


const vazir = Vazirmatn({ subsets: ["arabic"] });


export const metadata: Metadata = {
  title: "Home Page",
  description: "FilmFolio | Your Personal Film Portfolio ",
};




export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  await connectDB()
  const session = await getServerSession(authOptions);
  const user = await User?.findOne({ email: session?.user?.email });


  return (
    <html lang="fa" >
      <body className={`max-w-[1440px] mx-auto ${vazir.className}`}>
        <GoogleTranslateProvider>

          <TanstackProvider>
            <SessionProviderComp>

              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Navbar
                  userInfo={user}
                // userInfo={JSON.parse(JSON.stringify(user))}
                />
                <main className=" dark:bg-gradient-to-bl dark:from-indigo-950/50 dark:via-indigo-950/25 dark:to-indigo-950/10">
                  {children}
                </main>
                <Toaster />

                <Footer />
              </ThemeProvider>
            </SessionProviderComp>
          </TanstackProvider>
        </GoogleTranslateProvider>
      </body>
    </html >
  );
}






