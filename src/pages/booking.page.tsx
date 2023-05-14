import { useEffect, useReducer } from 'react';
import BookingForm from '../components/booking-form/booking-form';
import { fetchAPI } from '../hooks/mockFetchBooking';

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
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  const initializeTimes = () => {
    dispatch({ type: 'init', payload: fetchAPI(new Date()) });
  };

  const updateTimes = (selectedDate: string) => {
    dispatch({ type: 'update', payload: fetchAPI(new Date(selectedDate)) });
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <div>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
};

export default BookingPage;
