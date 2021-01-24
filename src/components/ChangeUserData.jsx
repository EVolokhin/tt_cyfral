import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, currentUser } from '../store/configurestore';
import { setCurrentUser, changeUser } from '../store/actions';

export const ChangeUserData = () => {
  // длля доступа к глобальному состоянию
  const dispatch = useDispatch();
  const usersList = useSelector(selectUsers);
  const adminUser = useSelector(currentUser);

  const [user, setUser] = useState(adminUser);

  // функция для изменения параметров

  const editChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  // функция с логикой сохранения изменений
  // в инфо авторизированного пользовыателя

  const saveChange = () => {
    // заменяем текущего юзера в локальном хранилище и стэйте
    localStorage.setItem('activeUser', JSON.stringify(user));
    dispatch(setCurrentUser(user));

    // заменяем в списке в стэйте и локальном списке
    const index = usersList.findIndex(person => adminUser.id === person.id);
    const changedList = [...usersList];

    changedList.splice(index, 1, user);

    dispatch(changeUser(changedList));
    localStorage.setItem('usersList', JSON.stringify(changedList));
  };

  return (
    <>
      {user === undefined && <Redirect to="/" />}
      <div className="d-flex flex-column p-5 container-md">
        <label htmlFor="edit-name">Ф.И.О</label>
        <input
          className="add-user__input"
          type="text"
          id="edit-name"
          name="name"
          onChange={editChange}
          value={user.name}
        />

        <label htmlFor="edit-position">Должность</label>
        <input
          className="add-user__input"
          type="text"
          id="edit-position"
          name="position"
          onChange={editChange}
          value={user.position}

        />

        <label htmlFor="edit-phone">Телефон</label>
        <input
          className="add-user__input"
          type="tel"
          id="edit-phone"
          name="phone"
          onChange={editChange}
          value={user.phone}

        />

        <label htmlFor="edit-login">Логин</label>
        <input
          className="add-user__input"
          type="text"
          id="edit-login"
          name="login"
          onChange={editChange}
          value={user.login}

        />

        <label htmlFor="edit-password">Пароль</label>
        <input
          className="add-user__input"
          type="text"
          id="edit-password"
          name="password"
          onChange={editChange}
          value={user.password}

        />

        <button
          type="button"
          onClick={saveChange}
          className="btn btn-lg btn-warning my-4"
        >
          Сохранить изменения
        </button>

      </div>
    </>
  );
};
