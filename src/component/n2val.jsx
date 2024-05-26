import React, { useState } from 'react';

export function RegisterProfile  ()  {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!firstName || !middleName || !lastName) {
      setError('Имя, отчество и фамилия должны быть заполнены');
      return false;
    }

    if (birthDate && !/^\d{2}\.\d{2}\.\d{4}$/.test(birthDate)) {
      setError('Неправильно введенная дата');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Форма отправлена');
    }
  };

  return (
    <>
    <h1 className='register2'>N2</h1>
    <form onSubmit={handleSubmit}>
      <label>Имя:</label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br />
      <label>Отчество:</label>
      <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
      <br />
      <label>Фамилия:</label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <br />
      <label>Дата рождения (ДД.ММ.ГГГГ):</label>
      <input type="text" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      <br />
      <label>Адрес:</label>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      <br />
      <button type="submit">Сохранить</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
    </>
  );
};
