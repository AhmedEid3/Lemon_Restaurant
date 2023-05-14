import { useRef, useState } from 'react';
import { Booking } from './booking.type';
import Button from '../button/Button';

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
      <div className="row">
        <div className="col-md-6">
          <form data-testid="form" onSubmit={(event) => handleSubmit(event)}>
            <div className="mb-3">
              <label className="form-label" htmlFor="reservationDate">
                Choose date
              </label>
              <input
                className="form-control"
                required
                type="date"
                id="reservationDate"
                data-testid="reservationDate"
                min={new Date().toISOString().substring(0, 10)}
                value={bookingValues.reservationDate}
                onChange={handleChangeInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="reservationTime">
                Choose time
              </label>
              <select
                required
                id="reservationTime"
                data-testid="reservationTime"
                value={bookingValues.reservationTime}
                onChange={handleChangeInput}
                className="form-select"
              >
                <option value=""></option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="guests">
                Number of guests
              </label>
              <input
                className="form-control"
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
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="occasion">
                Occasion
              </label>
              <select
                required
                className="form-select"
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
            </div>

            <Button
              aria-label="On Click"
              disabled={!isValidInputs()}
              type="submit"
            >
              Book Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
