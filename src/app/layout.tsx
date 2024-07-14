import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import Navbar from "@/templates/navbar/navbar";

import { getServerSession } from "next-auth";
import connectDB from "@/lib/connectDB";
import User from "@/models/user";
import { authOptions } from "@/auth-options";
import { SessionProvider } from "next-auth/react";
import SessionProviderComp from "@/lib/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  await connectDB()
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session?.user?.email });


  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderComp>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar
              // userInfo={user}
              userInfo={JSON.parse(JSON.stringify(user))}
            />
            {children}
          </ThemeProvider>
        </SessionProviderComp>
      </body>
    </html >
  );
}
