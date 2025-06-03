import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    const res = await fetch(`/api/v1/bookings/checkout-session/${tourId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    showAlert('success', 'tour booked successfuly');
    window.setTimeout(() => {
      location.assign('/');
    }, 1500);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
