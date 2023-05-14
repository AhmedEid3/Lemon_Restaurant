import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import HomePage from './pages/home.page';
import BookingPage from './pages/booking.page';
import ConfirmedBookingPage from './pages/confirmed-booking.page';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking/confirmed" element={<ConfirmedBookingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
