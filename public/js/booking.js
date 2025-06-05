import { showAlert } from './alerts';
import { httpRequest } from './http';

export const bookTour = async (tourId) => {
  const url = `/api/v1/bookings/checkout-session/${tourId}`;
  const method = 'GET';
  httpRequest(url, method)
    .then((data) => {
      showAlert('success', 'tour booked successfuly!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    })
    .catch(() => showAlert('error', 'error booking tour!'));
  // try {
  //   const res = await fetch(`/api/v1/bookings/checkout-session/${tourId}`, {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  //   showAlert('success', 'tour booked successfuly');
  //   window.setTimeout(() => {
  //     location.assign('/');
  //   }, 1500);
  // } catch (err) {
  //   console.log(err);
  //   showAlert('error', err);
  // }
};
