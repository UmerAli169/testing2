"use client";
import { Provider } from "react-redux";
import store from "./Redux/store";
import CustomProvider from "../components/wrapper";

import ProtectedRouteWrapper from "./auth/ProtectedRoute/page";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased flex flex-col max-w-[1440px]  mx-auto w-full`}
      >
        <Provider store={store}>
          <CustomProvider>
            <Navbar />
            <ProtectedRouteWrapper>{children}</ProtectedRouteWrapper>
            <Footer />
          </CustomProvider>
        </Provider>
      </body>
    </html>
  );
}
