import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Largesse - Push Your Limits",
  description: "For creators and suppoter of Talents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000000] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
      <SessionWrapper>
      <NavBar/> 
      <div className="min-h-screen bg-[#000000] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
      {children}
      </div>
      <Footer/>
      </SessionWrapper>
      </body>
    </html>
  );
}
