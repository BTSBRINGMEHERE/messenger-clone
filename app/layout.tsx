import ToasterContext from "@/components/context/ToasterContext";

import { Inter } from "next/font/google";

import "./globals.css";
import AuthContext from "@/components/context/AuthContext";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Messenger Clone",
  description: "Chat!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
