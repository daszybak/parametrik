import Footer from 'src/components/footer/footer.component';
import Navbar from 'src/components/navbar/navbar.component';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
