//This File is responsible for fonts.
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musaab's Portfolio",
  description: "Modern Portfolio With Creative Touches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      {/* <body className={inter.className}> */}
        <ThemeProvider
          attribute="class"
          //changing the theme and make it dark by default all of that with the help of next-themes packs.
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
