import { getUrl, getHeaders } from './login';
import { showAlert } from './alerts';

// type is 'password' or 'data'
export const updateSettings = async (data, type) => {
  const action = type === 'password' ? 'updateMyPassword' : 'updateMe';
  const response = await fetch(getUrl(action), {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  if (response.ok) {
    showAlert('success', `${type.toUpperCase()} updated successfuly!`);
  } else {
    var error = await response.json();
    showAlert('error', error.message);
  }
};
