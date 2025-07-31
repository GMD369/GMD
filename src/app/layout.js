// src/app/layout.js
import './globals.css';
import Navbar from "@/components/Navbar";
import BackgroundGrid from "@/components/BackgroundGrid";
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Portfolio | Ghulam Mohiyu Ud Din',
  description: 'Ghulam Mohiyu Ud Din (GMD) G. Portfolio – A modern personal portfolio website built with Next.js and Tailwind CSS. Showcasing web development projects, skills, resume, and contact details with responsive design and 3D animations. Perfect for clients searching for a professional full-stack developer.',

   icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-gradient-to-br from-[#090b11] to-[#454951] text-white font-poppins">
        <BackgroundGrid/>
        <Navbar />
        {/* push content below navbar height (~72 px) */}
        <div className="pt-20">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
