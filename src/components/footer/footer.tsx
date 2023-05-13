import { useNavigate } from 'react-router-dom';
import Logo from '../logo/logo';
import './footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (link: string) => {
    navigate(link);
  };

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
                <div
                  tabIndex={0}
                  role="link"
                  className="footer__menu__item"
                  onClick={() => handleNavigation('/')}
                  onKeyDown={() => handleNavigation('/')}
                >
                  Home
                </div>
              </li>
              <li>
                <div
                  tabIndex={0}
                  role="link"
                  className="footer__menu__item"
                  onClick={() => handleNavigation('/about')}
                  onKeyDown={() => handleNavigation('/about')}
                >
                  About
                </div>
              </li>
              <li>
                <div
                  tabIndex={0}
                  role="link"
                  className="footer__menu__item"
                  onClick={() => handleNavigation('/menu')}
                  onKeyDown={() => handleNavigation('/menu')}
                >
                  menu
                </div>
              </li>
              <li>
                <div
                  tabIndex={0}
                  role="link"
                  className="footer__menu__item"
                  onClick={() => handleNavigation('/reservations')}
                  onKeyDown={() => handleNavigation('/reservations')}
                >
                  Reservations
                </div>
              </li>
              <li>
                <div
                  tabIndex={0}
                  role="link"
                  className="footer__menu__item"
                  onClick={() => handleNavigation('/booking')}
                  onKeyDown={() => handleNavigation('/booking')}
                >
                  Order Online
                </div>
              </li>
              <li>
                <div
                  tabIndex={0}
                  role="link"
                  className="footer__menu__item"
                  onClick={() => handleNavigation('/login')}
                  onKeyDown={() => handleNavigation('/login')}
                >
                  login
                </div>
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
