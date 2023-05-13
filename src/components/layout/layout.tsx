import { PropsWithChildren } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
