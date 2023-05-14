import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import HomePage from './pages/home.page';
import BookingPage from './pages/booking.page';
import ConfirmedBookingPage from './pages/confirmed-booking.page';
import AboutPage from './pages/about.page';
import MenuPage from './pages/menu.page';
import OrderingPage from './pages/ordering.page';
import LoginPage from './pages/login.page';
import Routing from './routes/Routing';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={Routing.homeLink} element={<HomePage />} />
        <Route path={Routing.bookingLink} element={<BookingPage />} />
        <Route
          path={Routing.bookingConfirmedLink}
          element={<ConfirmedBookingPage />}
        />
        <Route path={Routing.aboutLink} element={<AboutPage />} />
        <Route path={Routing.menuLink} element={<MenuPage />} />
        <Route path={Routing.orderLink} element={<OrderingPage />} />
        <Route path={Routing.loginLink} element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
