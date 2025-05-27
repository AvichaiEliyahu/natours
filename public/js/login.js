import { showAlert } from './alerts';

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
  postData(getUrl('login'), {
    email,
    password,
  }).then((data) => {
    if (data.status === 'success') {
      showAlert('success', 'logged in successfuly');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    } else {
      showAlert('error', data.message);
    }
  });
};

export const logout = async () => {
  const response = await fetch(getUrl('logout'), {
    method: 'GET',
    headers: getHeaders(),
  });

  if (response.status === 200) {
    location.reload(true);
  } else {
    showAlert('error', 'Error logging out! Please try again!');
  }
};
