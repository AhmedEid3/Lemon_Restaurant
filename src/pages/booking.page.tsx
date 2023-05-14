import { useEffect, useReducer } from 'react';
import BookingForm from '../components/booking-form/booking-form';
import { fetchAPI, submitAPI } from '../hooks/mockFetchBooking';
import { Booking } from '../components/booking-form/booking.type';
import { useNavigate } from 'react-router-dom';

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
    if (isBooked) navigate('/booking/confirmed');
  };

  useEffect(() => {
    void initializeTimes();
  }, []);

  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        onSubmit={submitForm}
      />
    </div>
  );
};

export default BookingPage;
