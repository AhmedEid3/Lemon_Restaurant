import { PropsWithChildren } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="border-top-line" />
      {children}
      <div className="border-bottom-line" />
      <Footer />
    </>
  );
};

export default Layout;
