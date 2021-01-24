import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../store/configurestore';

export const LocalUsers = () => {
  const usersList = useSelector(selectUsers);

  return (
    <div className="container-md">

      <div>
        Пользователи
      </div>

      <table className="table table-striped text-center mb-5">
        <thead className="text-white">
          <tr>
            <td>ФИО</td>
            <td>Должность</td>
            <td>Телефон</td>
            <td>Логин</td>
          </tr>
        </thead>
        <tbody>
          {usersList.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.phone}</td>
              <td>{user.login}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
