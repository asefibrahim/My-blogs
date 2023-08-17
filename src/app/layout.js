import Footer from "./ReuseableComponents/Footer";
import Header from "./ReuseableComponents/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="w-11/12 mx-auto my-5 min-h-[calc(100vh-200px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
