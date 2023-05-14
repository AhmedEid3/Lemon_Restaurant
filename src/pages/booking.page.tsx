import { useEffect, useReducer } from 'react';
import BookingForm from '../components/booking-form/booking-form';
import { fetchAPI, submitAPI } from '../hooks/mockFetchBooking';
import { Booking } from '../components/booking-form/booking.type';
import { useNavigate } from 'react-router-dom';
import Routing from '../routes/Routing';

interface Action {
  type: 'init' | 'update';
  payload: Array<string>;
}

const availableTimesReducer = (state: Array<string>, action: Action) => {
  switch (action.type) {
    case 'init': {
      state = action.payload;
      return state;
    }

    case 'update': {
      state = action.payload;
      return state;
    }

    default:
      return state;
  }
};

const BookingPage = () => {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  const initializeTimes = async () => {
    dispatch({ type: 'init', payload: await fetchAPI(new Date()) });
  };

  const updateTimes = async (selectedDate: string) => {
    dispatch({
      type: 'update',
      payload: await fetchAPI(new Date(selectedDate)),
    });
  };

  const submitForm = async (bookingValues: Booking) => {
    const isBooked = await submitAPI(bookingValues);
    if (isBooked) navigate(Routing.bookingConfirmedLink);
  };

  useEffect(() => {
    void initializeTimes();
  }, []);

  return (
    <main className="container py-3">
      <h1 className="heading">Book Now</h1>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        onSubmit={submitForm}
      />
    </main>
  );
};

export default BookingPage;
