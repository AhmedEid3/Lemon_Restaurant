import LogoWithLink from '../logo/logo-with-link';
import Nav from '../nav/nav';

const Header = () => {
  return (
    <header className="container">
      <div className="my-2 display-flex justify-content-between flex-wrap">
        <LogoWithLink link="/" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
