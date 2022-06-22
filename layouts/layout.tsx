import { Children } from "../utils/interfaces/interfaces";

import Navbar from "../containers/navbar/navbar";
import Footer from "../containers/footer/footer";
import React from "react";

const Layout: React.FC<Children> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
