import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../store/configurestore';

export const NewUser = () => {
  const [name, setName] = useState();
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [controlPass, setControlPass] = useState('');

  const usersList = useSelector(selectUsers);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'position':
        setPosition(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;
      case 'login':
        setLogin(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'control':
        setControlPass(event.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = () => {
    const newUser = {
      name,
      position,
      phone,
      login,
      password,
      id: +Date.now(),
    };

    localStorage.setItem('usersList', JSON.stringify([...usersList, newUser]));

    window.location.href = '/tt_cyfral/';
  };

  const passCorrect = (password === controlPass);

  // условия для активации кнопки - заполнены все поля,
  // введный пароль и проверка совпадают иначе кнопка подтверждения не активна
  const buttonActive = (!name
    || !position
    || !phone
    || !login
    || !password
    || !passCorrect);

  return (
    <form
      className="d-flex flex-column p-5 container-md"
      name="registration"
    >

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Ф.И.О
        </span>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Иванов Иван Иванович"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Должность
        </span>
        <input
          type="text"
          className="form-control"
          id="position"
          name="position"
          value={position}
          onChange={handleChange}
          placeholder="Юрист"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Телефон
        </span>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="+380500000000"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Логин
        </span>
        <input
          type="text"
          className="form-control"
          id="login"
          name="login"
          value={login}
          onChange={handleChange}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Пароль
        </span>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Подтвердите пароль
        </span>
        <input
          className="form-control"
          type="password"
          id="control"
          name="control"
          value={controlPass}
          onChange={handleChange}
        />
      </div>
      {passCorrect || (
        <span className="input-text text-danger">
          *пароль и подтверждение пароля не совпадают
        </span>
      ) }

      {buttonActive && (
        <span className="input-text text-danger">
          * Запоните все поля формы
        </span>
      )}
      <button
        className="btn btn-primary mb-3"
        type="button"
        onClick={handleSubmit}
        disabled={buttonActive}
      >
        Подтвердить
      </button>
    </form>
  );
};
