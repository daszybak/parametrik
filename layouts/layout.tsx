import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Padding from "../components/padding/padding";
import React, { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Padding />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
