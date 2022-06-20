import {Children} from "../utils/helpers/interfaces/interfaces";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Padding from "../components/padding/padding";
import React, { ReactNode } from "react";


const Layout: React.FC<Children> = ({ children }) => {
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
