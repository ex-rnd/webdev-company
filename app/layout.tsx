import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";

const font = Rubik({
  weight:['300','400','500','700','600','800','900'],
  subsets:['latin']

})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebDev",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${font.className} antialiased`}>
      <Provider>
        {children}
      </Provider>
      </body>
    </html>
  );
}

// <body className="min-h-full flex flex-col">{children}</body>