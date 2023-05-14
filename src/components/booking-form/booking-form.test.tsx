import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';

import BookingForm from './booking-form';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

describe('BookingForm Component', () => {
  it('should render correctly', () => {
    const mockUpdateTime = vitest.fn(() => Promise.resolve());
    const mockOnSubmit = vitest.fn(() => Promise.resolve());
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={mockUpdateTime}
        onSubmit={mockOnSubmit}
      />
    );

    const form = screen.getByTestId('form');
    const reservationDateInput = screen.getByTestId('reservationDate');
    const reservationTimeInput = screen.getByTestId('reservationTime');
    const numberOfGuestInput = screen.getByTestId('guests');
    const occasionInput = screen.getByTestId('occasion');
    const bookNowButton = screen.getByRole('button', { name: /Book Now/i });

    expect(form).toBeInTheDocument();
    expect(reservationDateInput).toBeInTheDocument();
    expect(reservationTimeInput).toBeInTheDocument();
    expect(reservationTimeInput).not.toHaveAttribute('multiple');
    expect(numberOfGuestInput).toBeInTheDocument();
    expect(occasionInput).toBeInTheDocument();
    expect(occasionInput).not.toHaveAttribute('multiple');
    expect(bookNowButton).toBeInTheDocument();
  });

  it('should reservation date input working properly', async () => {
    const mockUpdateTime = vitest.fn(() => Promise.resolve());
    const mockOnSubmit = vitest.fn(() => Promise.resolve());
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={mockUpdateTime}
        onSubmit={mockOnSubmit}
      />
    );

    const reservationDateInput = screen.getByTestId('reservationDate');
    await userEvents.type(reservationDateInput, '2023-05-16');
    expect(reservationDateInput).toHaveValue('2023-05-16');
  });

  it('should reservation time input working properly', async () => {
    const mockUpdateTime = vitest.fn(() => Promise.resolve());
    const mockOnSubmit = vitest.fn(() => Promise.resolve());
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={mockUpdateTime}
        onSubmit={mockOnSubmit}
      />
    );

    const reservationTimeInput = screen.getByTestId('reservationTime');
    const reservationTimeOptionInput = screen.getByRole('option', {
      name: availableTimes[1],
    });
    await userEvents.selectOptions(reservationTimeInput, availableTimes[1]);
    expect(reservationTimeOptionInput.selected).toBe(true);
  });

  it('should number of guests input working properly', async () => {
    const mockUpdateTime = vitest.fn(() => Promise.resolve());
    const mockOnSubmit = vitest.fn(() => Promise.resolve());
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={mockUpdateTime}
        onSubmit={mockOnSubmit}
      />
    );

    const numberOfGuestInput = screen.getByTestId('guests');
    await userEvents.clear(numberOfGuestInput);
    await userEvents.type(numberOfGuestInput, '3');
    expect(numberOfGuestInput).toHaveValue(3);

    await userEvents.clear(numberOfGuestInput);
    await userEvents.type(numberOfGuestInput, '0');
    expect(numberOfGuestInput).toBeInvalid();

    await userEvents.clear(numberOfGuestInput);
    await userEvents.type(numberOfGuestInput, '11');
    expect(numberOfGuestInput).toBeInvalid();

    await userEvents.clear(numberOfGuestInput);
    await userEvents.type(numberOfGuestInput, '3.5');
    expect(numberOfGuestInput).toBeInvalid();
  });

  it('should occasion input working properly', async () => {
    const mockUpdateTime = vitest.fn(() => Promise.resolve());
    const mockOnSubmit = vitest.fn(() => Promise.resolve());
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={mockUpdateTime}
        onSubmit={mockOnSubmit}
      />
    );

    const occasionInput = screen.getByTestId('occasion');
    const anniversaryOption = screen.getByRole('option', {
      name: /anniversary/i,
    });
    await userEvents.selectOptions(occasionInput, 'anniversary');

    expect(anniversaryOption.selected).toBe(true);
  });

  it('should submitting form correctly', () => {
    const mockUpdateTime = vitest.fn(() => Promise.resolve());
    const mockOnSubmit = vitest.fn(() => Promise.resolve());
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={mockUpdateTime}
        onSubmit={mockOnSubmit}
      />
    );

    const submitButton = screen.getByRole('button', { name: /book now/i });

    fireEvent.click(submitButton);

    expect(mockOnSubmit).toBeCalledTimes(1);
  });

  it('should form rest to init value after submitting', () => {
    const mockUpdateTime = vitest.fn(() => Promise.resolve());
    const mockOnSubmit = vitest.fn(() => Promise.resolve());
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={mockUpdateTime}
        onSubmit={mockOnSubmit}
      />
    );

    const form = screen.getByTestId('form');
    const reservationDateInput = screen.getByTestId('reservationDate');
    const reservationTimeInput = screen.getByTestId('reservationTime');
    const numberOfGuestInput = screen.getByTestId('guests');
    const occasionInput = screen.getByTestId('occasion');

    fireEvent.submit(form);

    expect(reservationDateInput).toHaveValue('');
    expect(reservationTimeInput).toHaveValue(availableTimes[0]);
    expect(numberOfGuestInput).toHaveValue(1);
    expect(occasionInput).toHaveValue('birthday');
  });
});
