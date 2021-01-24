import React from 'react';
import { Route, Link } from 'react-router-dom';
import { LocalUsers } from './LocalUsers';
import { Message } from './Message';
import { ChangeUserData } from './ChangeUserData';

export const AdminPage = () => {
  const exit = () => {
    window.location.href = '/tt_cyfral/';
    localStorage.removeItem('activeUser');
  };

  return (
    <div className="container-md d-flex flex-column bg-info text-white">

      <div>
        <button
          className="btn btn-sm btn-danger"
          type="button"
          onClick={exit}
        >
          ВЫЙТИ
        </button>
      </div>

      <h2 className="badge bg-primary text-wrap">
        СТРАНИЦА ПОЛЬЗОВАТЕЛЯ
      </h2>

      <Link to="/admin/data" className="link-warning mb-3">
        Изменить параметры пользователя
      </Link>
      <Link to="/admin/users" className="link-warning mb-3">
        Локальные пользователи
      </Link>
      <Link to="/admin/message" className="link-warning mb-5">
        Сообщение
      </Link>

      <Route path="/admin/data">
        <ChangeUserData />
      </Route>
      <Route path="/admin/users">
        <LocalUsers />
      </Route>
      <Route path="/admin/message">
        <Message />
      </Route>
    </div>
  );
};
