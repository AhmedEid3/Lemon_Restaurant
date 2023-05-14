import { PropsWithChildren } from 'react';

import { NavLink } from 'react-router-dom';
import './nav.style.css';

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
        <NavItem link="/">home</NavItem>
        <NavItem link="/about">about</NavItem>
        <NavItem link="/menu">menu</NavItem>
        <NavItem link="/booking">reservations</NavItem>
        <NavItem link="/order">order online</NavItem>
        <NavItem link="/login">login</NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
