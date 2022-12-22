import { Transition } from '@mantine/core';
import { useContext } from 'react';
import Footer from 'src/components/footer/footer.component';
import LoadingScreen from 'src/components/loading-screen/loading-screen.component';
import Navbar from 'src/components/navbar/navbar.component';
import { PageLoadContext } from 'src/context/page-load-context-provider/page-load-context-provider';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { loaded } = useContext(PageLoadContext);

  return (
    <>
      <Navbar />
      {children}
      <Footer />

      <Transition transition="fade" mounted={!loaded}>
        {(styles) => <LoadingScreen style={styles} />}
      </Transition>
    </>
  );
};

export default Layout;
