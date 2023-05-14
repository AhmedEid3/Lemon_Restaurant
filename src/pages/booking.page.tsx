import { useReducer } from 'react';
import BookingForm from '../components/booking-form/booking-form';

interface Action {
  type: 'init' | 'update';
  payload: string;
}

const availableTimesReducer = (state: Array<string>, action: Action) => {
  switch (action.type) {
    case 'init': {
      return state;
    }

    case 'update': {
      return state;
    }

    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  const initializeTimes = (initTime: string) => {
    dispatch({ type: 'init', payload: initTime });
  };

  const updateTimes = (selectedDate: string) => {
    dispatch({ type: 'update', payload: selectedDate });
  };

  return (
    <div>
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
};

export default BookingPage;
