import Footer from './Footer';
import Header from './Header';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='content'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
