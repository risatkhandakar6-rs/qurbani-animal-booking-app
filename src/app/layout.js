import {  Poppins } from "next/font/google";
import "./globals.css";
import AnimalProvider from "@/context/AnimalContext";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
   weight:["400","500","600","700"],
});


export const metadata = {
  title: {
    default: 'EidLivestock | Buy Qurbani Animals Online',
    template: '%s | EidLivestock',
  },
  description: 'Find healthy, quality cows and goats for Qurbani.',
}
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`${poppins.className}min-h-full flex flex-col`}>
        <AnimalProvider>
          {children}
          <ToastContainer></ToastContainer>
        </AnimalProvider> </body>
    </html>
  );
}
