import { useEffect, useRef, useState } from 'react';

interface Booking {
  reservationDate: string;
  reservationTime: string;
  guests: number;
  occasion: string;
}

interface Props {
  availableTimes: Array<string>;
  updateTimes: (selectedDate: string) => void;
}

const BookingForm = ({ availableTimes, updateTimes }: Props) => {
  const { current: occasion } = useRef(['birthday', 'anniversary']);

  const initBooking = {
    guests: 1,
    occasion: occasion[0],
    reservationTime: availableTimes[0],
    reservationDate: '',
  };

  const [bookingValues, setBookingValues] = useState<Booking>(initBooking);

  const handleChangeInput = (
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
      updateTimes(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(bookingValues);
    setBookingValues(initBooking);
  };

  useEffect(() => {
    setBookingValues((prev) => ({
      ...prev,
      reservationTime: availableTimes[0],
    }));
  }, [availableTimes]);

  return (
    <div className="container">
      <form
        data-testid="form"
        onSubmit={(event) => handleSubmit(event)}
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      >
        <label htmlFor="reservationDate">Choose date</label>
        <input
          type="date"
          id="reservationDate"
          data-testid="reservationDate"
          value={bookingValues.reservationDate}
          onChange={handleChangeInput}
        />

        <label htmlFor="reservationTime">Choose time</label>
        <select
          id="reservationTime"
          data-testid="reservationTime"
          value={bookingValues.reservationTime}
          onChange={handleChangeInput}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
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
          style={{ textTransform: 'capitalize' }}
          id="occasion"
          data-testid="occasion"
          value={bookingValues.occasion}
          onChange={handleChangeInput}
        >
          {occasion.map((oc) => (
            <option key={oc} value={oc}>
              {oc}
            </option>
          ))}
        </select>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
