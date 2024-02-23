import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edwin Munguia | Full Stack Developer",
  description: "Tutorials, Opinions, Projects and Bit More. Welcome!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="App">
          <Header />
          <div className="App__content">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
