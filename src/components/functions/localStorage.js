
// setting list of registerred users to local storage
// or setting the empty array
export const localUsers = () => {
  const initialValue = localStorage.getItem('usersList')
    ? JSON.parse(localStorage.getItem('usersList'))
    : [];

  localStorage.setItem('usersList', JSON.stringify(initialValue));

  return initialValue;
};

// setting an active user
export const activeUser = () => {
  const initialValue = localStorage.getItem('activeUser')
    ? JSON.parse(localStorage.getItem('activeUser'))
    : {
      name: '',
      position: '',
      phone: '',
      login: '',
      password: '',
      id: '',
    };

  localStorage.setItem('activeUser', JSON.stringify(initialValue));

  return initialValue;
};
