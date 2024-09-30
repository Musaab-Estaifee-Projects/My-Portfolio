//This File is responsible for fonts.
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musaab Estaifee's Portfolio | Software Engineer & Web Developer",
  description:
    "Modern Portfolio with Creative Touches, created with latest available web technologies. Welcome to my portfolio! Explore my projects, technical skills, and experience in software engineering and web development.",
  icons: {
    icon: "/logo.ico",
  },
  openGraph: {
    title: "Musaab Estaifee's Portfolio | Software Engineer & Web Developer",
    description:
      "Modern Portfolio with Creative Touches, created with latest available web technologies. Welcome to my portfolio! Explore my projects, technical skills, and experience in software engineering and web development.",
    url: "https://musaab-estaifee-portfolio.vercel.app/",
    images: [
      {
        url: "https://musaab-estaifee-portfolio.vercel.app/portfolio.webp",
        width: 1200,
        height: 630,
        alt: "portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="custom-scrollbar">
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
