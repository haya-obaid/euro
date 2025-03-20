// src/app/layout.tsx


import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
      <html lang="en">
          <body>
              <Header />
              {children} 
              <Footer/>
          </body>
      </html>
  );
}