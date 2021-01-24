
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectUsers } from './store/configurestore';
import { LogIn } from './components/LogIn';
import { NewUser } from './components/NewUser';
import { AdminPage } from './components/AdminPage';
import './App.scss';

export const App = () => {
  const usersList = useSelector(selectUsers);

  return (
    <>
      {(usersList.length === 0) && (<Redirect to="/newuser" />)}
      <Route path="/" exact>
        <LogIn />
      </Route>
      <Route path="/newuser">
        <NewUser />
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>
    </>
  );
};
