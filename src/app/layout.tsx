"use client";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState(true);

  const childToParent = (childdata: boolean) => {
    setData(childdata);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <section>
            <SideBar toogle={data} />
          </section>
          <section className="mainPage">
            <NavBar childToParent={childToParent} />
            <div>{children}</div>
          </section>
        </div>
      </body>
    </html>
  );
}
