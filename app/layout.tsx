import "./globals.css";
import { Inter } from "next/font/google";
import Nabvar from "./components/Nabvar";
import Banner from "./components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <Nabvar />
        {children}
      </body>
    </html>
  );
}
