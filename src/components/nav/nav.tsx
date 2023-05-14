import { PropsWithChildren } from 'react';

import { NavLink } from 'react-router-dom';
import './nav.style.css';
import Routing from '../../routes/Routing';

interface Props extends PropsWithChildren {
  link: string;
}

const NavItem = ({ children, link }: Props) => {
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul className="navbar">
        <NavItem link={Routing.homeLink}>home</NavItem>
        <NavItem link={Routing.aboutLink}>about</NavItem>
        <NavItem link={Routing.menuLink}>menu</NavItem>
        <NavItem link={Routing.bookingLink}>reservations</NavItem>
        <NavItem link={Routing.orderLink}>order online</NavItem>
        <NavItem link={Routing.loginLink}>login</NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
