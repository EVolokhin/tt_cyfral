import React, { useState } from 'react';

export const Message = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // ввводим сообщение в новом поле и очищем окно через 4 сек
  const handleClick = () => {
    setOutput(input);
    setInput('');
    setTimeout(() => (
      setOutput('')
    ), 4000);
  };

  return (
    <>
      <div className="mb-2">
        Сообщение
      </div>

      <textarea
        className="mb-5"
        name="inbox"
        value={input}
        onChange={handleChange}
        id="inbox"
        cols="50"
        rows="5"
        placeholder="Введите сообщение"
      />

      <button
        type="button"
        onClick={handleClick}
        className="btn btn-lg btn-warning mb-5"
      >
        Вывести сообщение
      </button>

      <div className="alert alert-success mb-3">
        <div>{output}</div>
      </div>
    </>
  );
};
