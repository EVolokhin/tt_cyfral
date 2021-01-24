import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { localUsers, activeUser } from '../components/functions/localStorage';

const initialState = {
  usersList: localUsers(),
  currentUser: activeUser(),
};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);

// selectors

export const selectUsers = state => state.usersList;
export const currentUser = state => state.currentUser;
