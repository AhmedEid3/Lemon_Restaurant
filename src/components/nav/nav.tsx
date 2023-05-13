import { PropsWithChildren } from 'react';

import { useNavigate } from 'react-router-dom';
import './nav.style.css';

interface Props extends PropsWithChildren {
  link: string;
}

const NavItem = ({ children, link }: Props) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(link);
  };

  return (
    <li>
      <div
        role="link"
        tabIndex={0}
        onClick={() => handleNavigation()}
        onKeyDown={() => handleNavigation()}
        className="navbar__link"
      >
        {children}
      </div>
    </li>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul className="navbar">
        <NavItem link="/">home</NavItem>
        <NavItem link="/about">about</NavItem>
        <NavItem link="/menu">menu</NavItem>
        <NavItem link="/reservations">reservations</NavItem>
        <NavItem link="/booking">order online</NavItem>
        <NavItem link="/login">login</NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
