import type { Metadata } from "next";
import "./globals.css";
import { specialElite } from "./font";
import { cn } from "./utils";

export const metadata: Metadata = {
  title: "Benedict & Gloria's Wedding Invitation",
  description: "Benedict & Gloria's Wedding Invitation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          specialElite.className,
          "flex items-center justify-center w-screen min-h-screen"
        )}
      >
        {children}
      </body>
    </html>
  );
}
