import { ACTION_TYPES } from './actions';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_USER:
      return {
        usersList: [...state.usersList, action.payload],
      };
    case ACTION_TYPES.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case ACTION_TYPES.CHANGE_USER:
      return {
        usersList: action.payload,
      };

    default:
      return state;
  }
};
