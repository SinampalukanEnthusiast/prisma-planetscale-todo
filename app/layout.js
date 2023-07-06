import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full CRUD - To Do",
  description: "To do application with prisma and planetscale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Can add back logins if needed / wanted  */}
        {/* <Navbar /> */}
        <div className="bg-gray-50 min-h-screen w-screen flex items-center justify-center overflow-hidden">
          <div className="relative max-w-lg">
            {/* Left */}
            <div className="bg-gradient-to-tr from-green-400 transition-all to-purple-500 absolute bottom-10 -left-[500px] rounded-full w-[500px] h-[500px] mix-blend-multiply filter blur-xl opacity-50 animate-toRight "></div>
            {/* Middle */}
            <div className="bg-gradient-to-br from-red-400 to-orange-500 absolute -left-40 rounded-full w-[1000px] h-[3000px] mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
            {/* Right */}
            <div className="from-blue-500 to-yellow-500 bg-gradient-to-bl absolute bottom-10 left-24 rounded-full w-[500px] h-[500px] mix-blend-multiply filter blur-xl opacity-50 animate-toLeft delay-4000"></div>
          </div>

          <div className="absolute"> {children}</div>
        </div>
      </body>
    </html>
  );
}
