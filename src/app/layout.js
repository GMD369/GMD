// src/app/layout.js
import './globals.css';
import Navbar from "@/components/Navbar";
import BackgroundGrid from "@/components/BackgroundGrid";
import Footer from '@/components/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal Portfolio based on uiverse.io design',
   icons: {
    icon: "/2.png", // ya .png if you prefer
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-gradient-to-br from-[#090b11] to-[#454951] text-white font-grotesk">
        <BackgroundGrid/>
        <Navbar />
        
        {/* push content below navbar height (~72 px) */}
        <div className="pt-20">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
