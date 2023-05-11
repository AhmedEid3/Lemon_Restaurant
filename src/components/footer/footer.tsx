import Logo from '../logo/logo';

const Footer = () => {
  return (
    <footer>
      <div>
        <Logo />
      </div>
      <section>
        <h2>Doormat Navigation</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <ul>
          <li>
            Address: 25 High Street | City: Ashford | EX31 1QY | United Kingdom
          </li>
          <li>
            <a href="tel:+441632960421">+44 1632 960421</a>
          </li>
          <li>
            <a href="mailto:contact@restaurant-lemon.com">
              Email: contact@restaurant-lemon.com
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Social Media</h2>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
