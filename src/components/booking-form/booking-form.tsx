import { useRef, useState } from 'react';
import { Booking } from './booking.type';

interface Props {
  availableTimes: Array<string>;
  updateTimes: (selectedDate: string) => Promise<void>;
  onSubmit: (bookingValues: Booking) => Promise<void>;
}

const BookingForm = ({ availableTimes, updateTimes, onSubmit }: Props) => {
  const { current: occasion } = useRef(['birthday', 'anniversary']);

  const initBooking: Booking = {
    guests: 1,
    occasion: '',
    reservationTime: '',
    reservationDate: '',
  };

  const [bookingValues, setBookingValues] = useState<Booking>(initBooking);

  const handleChangeInput = async (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;

    setBookingValues((prev) => ({
      ...prev,
      [event.target.id]: value,
    }));

    if (event.target.id === 'reservationDate') {
      await updateTimes(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(bookingValues);
    await onSubmit(bookingValues);
    setBookingValues(initBooking);
  };

  const isValidInputs = () => {
    const isValidReservationDate = !!bookingValues.reservationDate;
    const isValidReservationTime = !!bookingValues.reservationTime;
    const isValidOccasion = !!bookingValues.occasion;
    const isGuestsValid = bookingValues.guests > 0 && bookingValues.guests < 11;

    return (
      isValidReservationDate &&
      isValidReservationTime &&
      isValidOccasion &&
      isGuestsValid
    );
  };

  return (
    <div className="container">
      <form
        data-testid="form"
        onSubmit={(event) => handleSubmit(event)}
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      >
        <label htmlFor="reservationDate">Choose date</label>
        <input
          required
          type="date"
          id="reservationDate"
          data-testid="reservationDate"
          min={new Date().toISOString().substring(0, 10)}
          value={bookingValues.reservationDate}
          onChange={handleChangeInput}
        />

        <label htmlFor="reservationTime">Choose time</label>
        <select
          required
          id="reservationTime"
          data-testid="reservationTime"
          value={bookingValues.reservationTime}
          onChange={handleChangeInput}
        >
          <option value=""></option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          required
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          data-testid="guests"
          value={bookingValues.guests}
          onChange={handleChangeInput}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          required
          style={{ textTransform: 'capitalize' }}
          id="occasion"
          data-testid="occasion"
          value={bookingValues.occasion}
          onChange={handleChangeInput}
        >
          <option value=""></option>
          {occasion.map((oc) => (
            <option key={oc} value={oc}>
              {oc}
            </option>
          ))}
        </select>

        <button aria-label="On Click" disabled={!isValidInputs()} type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
