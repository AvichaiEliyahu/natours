import { showAlert } from './alerts';
import { httpRequest } from './http';

export const getUrl = (action) => `/api/v1/users/${action}`;
export const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
  };
};

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return response.json();
};

export const login = (email, password) => {
  const url = getUrl('login');
  const method = 'POST';
  const data = { email, password };
  httpRequest(url, method, data)
    .then((data) => {
      showAlert('success', 'logged in successfuly');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    })
    .catch(() => showAlert('error', 'login failed!'));
  // postData(getUrl('login'), {
  //   email,
  //   password,
  // }).then((data) => {
  //   if (data.status === 'success') {
  //     showAlert('success', 'logged in successfuly');
  //     window.setTimeout(() => {
  //       location.assign('/');
  //     }, 1500);
  //   } else {
  //     showAlert('error', data.message);
  //   }
  // });
};

export const logout = async () => {
  const url = getUrl('logout');
  const method = 'GET';
  httpRequest(url, method)
    .then((data) => location.reload(true))
    .catch(() => showAlert('error', 'Error logging out! Please try again!'));
  // const response = await fetch(getUrl('logout'), {
  //   method: 'GET',
  //   headers: getHeaders(),
  // });

  // if (response.status === 200) {
  //   location.reload(true);
  // } else {
  //   showAlert('error', 'Error logging out! Please try again!');
  // }
};
