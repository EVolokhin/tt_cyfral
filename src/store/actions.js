
export const ACTION_TYPES = {
  ADD_USER: 'App::setUsersList',
  CURRENT_USER: 'App::setCurrentUser',
  CHANGE_USER: 'App::changeUserInfo',
};

export const addUser = value => ({
  type: ACTION_TYPES.ADD_USER,
  payload: value,
});

export const setCurrentUser = value => ({
  type: ACTION_TYPES.CURRENT_USER,
  payload: value,
});

export const changeUser = value => ({
  type: ACTION_TYPES.CHANGE_USER,
  payload: value,
});
