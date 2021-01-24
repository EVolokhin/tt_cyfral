import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers } from '../store/configurestore';
import { setCurrentUser } from '../store/actions';

export const LogIn = () => {
  const [userLogin, setUserLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(null);
  const [isLogin, setIsLogin] = useState(null);
  const [referrer, setReferrer] = useState(null);

  const dispatch = useDispatch();
  const usersList = useSelector(selectUsers);

  // фукция для котнролируемых полей ввода
  const handlChange = (fieldName, event) => {
    const { value } = event.target;

    if (fieldName === 'user') {
      setUserLogin(value);
      setIsLogin(true);
    } else {
      setPassword(value);
      setIsPassword(true);
    }
  };

  // функция проверки авторизации, наличия логина и пароля,
  //  соответствии пароля данным в хранилище

  const handleCheck = () => {
    if (!userLogin) {
      setIsLogin(false);

      return false;
    }

    if (!password) {
      setIsPassword(false);

      return false;
    }

    const controlUser = usersList.find(person => userLogin === person.login);

    return (controlUser.password === password);
  };

  // действие по нажатии кнопки Logg In

  const handleLoggIn = () => {
    if (!handleCheck()) {
      setIsPassword(false);

      return;
    }

    const user = usersList.find(person => userLogin === person.login);

    dispatch(setCurrentUser(user));
    localStorage.setItem('activeUser', JSON.stringify(user));
    setReferrer('/admin');
  };

  return (
    <div className="container-md bg-secondary text-white">
      {referrer && <Redirect to={referrer} />}
      <form className="d-flex flex-column" name="login">
        <h1 className="badge bg-primary text-wrap">
          Авторизация
        </h1>

        {isLogin
      || (
        <div>
          Choose a user
        </div>
      )}

        <select
          className="form-select my-3"
          name="user"
          id="name"
          onChange={event => handlChange('user', event)}
          defaultValue="choose"
        >
          <option value="choose" disabled>
            --choose a user--
          </option>
          {usersList.map(user => (
            <option
              value={user.login}
              key={user.id}
            >
              {user.login}
            </option>
          ))}
        </select>

        {isPassword
      || isPassword === null
      || (
        <div>
          WRONG PASSWORD
        </div>
      )}
        <input
          className="mb-5"
          type="password"
          name="password"
          placeholder="Enter password"
          id="pass"
          value={password}
          onChange={event => handlChange('pass', event)}
        />

        <div className="d-grid gap-2">
          <button
            className="btn btn-primary mb-3"
            type="button"
            onClick={handleLoggIn}
          >
            ВОЙТИ
          </button>
          <Link
            to="/newuser"
            className="btn btn-primary mb-3"
          >
            ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ
          </Link>
        </div>
      </form>
    </div>
  );
};
