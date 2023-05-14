import { NavLink } from 'react-router-dom';
import Logo from '../logo/logo';
import './footer.css';

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="container">
        <div className="row justify-content-between">
          <div
            className="col-sm-6 col-md-6 col-lg-2"
            style={{ alignSelf: 'center' }}
          >
            <Logo />
          </div>
          <section className="col-sm-6 col-md-6 col-lg-3">
            <h2 className="footer-title">Doormat Navigation</h2>
            <ul className="footer__menu">
              <li>
                <NavLink to="/" className={'footer__menu__item'}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={'footer__menu__item'}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className={'footer__menu__item'}>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/booking" className={'footer__menu__item'}>
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/order" className={'footer__menu__item'}>
                  Order Online
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={'footer__menu__item'}>
                  Login
                </NavLink>
              </li>
            </ul>
          </section>

          <section className="col-sm-6 col-md-6 col-lg-5">
            <h2 className="footer-title">Contact</h2>
            <ul className="footer__menu">
              <li className="footer__menu__item">
                25 High Street | City: Ashford | EX31 1QY | United Kingdom
              </li>
              <li>
                <a className="footer__menu__item" href="tel:+441632960421">
                  +44 1632 960421
                </a>
              </li>
              <li>
                <a
                  className="footer__menu__item"
                  href="mailto:contact@restaurant-lemon.com"
                >
                  contact@restaurant-lemon.com
                </a>
              </li>
            </ul>
          </section>

          <section className="col-sm-6 col-md-6 col-lg-2">
            <h2 className="footer-title">Social Media</h2>
            <ul className="footer__menu">
              <li>
                <a
                  className="footer__menu__item"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="footer__menu__item"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className="footer__menu__item"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
