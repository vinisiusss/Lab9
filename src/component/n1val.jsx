import React, { useState } from 'react';

export function Register  ()  {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!login || login.length < 6 || login.length > 20 || !/^[a-zA-Z0-9]+$/.test(login)) {
      setError('Логин должен быть не менее 6 символов и обязан включать в себя цифры');
      return false;
    }

    if (!password) {
      setError('Необходимо ввести пароль.');
      return false;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Форма отправлен');
    }
  };

  return (
    <>
    <h1 className='register'>N1 </h1>
    <p>Регистрация</p>
    <form onSubmit={handleSubmit}>
      <label>Логин:</label>
      <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      <br />
      <label>Пароль:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <label>Повтор пароля:</label>
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <br />
      <button type="submit">Зарегистрироваться</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
    </>
  );
};
