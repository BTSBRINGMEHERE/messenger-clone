import "./globals.css";
import { Inter } from "next/font/google";

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
