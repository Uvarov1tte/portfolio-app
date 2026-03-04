import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "./_utils/components/navbar";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "placeholder text",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.className} antialiased`}
      >
        <ThemeProvider attribute="data-theme" enableSystem defaultTheme="system">
          <div className="grid grid-cols-1 mx-[150px] min-h-screen transition-all duration-300">
            <Navbar></Navbar>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
