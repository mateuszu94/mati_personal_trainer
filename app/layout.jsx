import "./globals.css";

import { Header } from "@/components/Header/Header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
