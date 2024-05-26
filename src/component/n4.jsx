import React, { useState, useEffect } from 'react';

export function Dates() {
  const [birthDate, setBirthDate] = useState('');
  const [secondsLived, setSecondsLived] = useState(0);

  const handleChange = (e) => {
    setBirthDate(e.target.value);
  };

  useEffect(() => {
    if (birthDate) {
      const interval = setInterval(() => {
        const birthTimestamp = Date.parse(birthDate);
        const currentTimestamp = Date.now();
        const seconds = Math.floor((currentTimestamp - birthTimestamp) / 1000);
        setSecondsLived(seconds);
      }, 1000);
 
      return () => clearInterval(interval);
    }
  }, [birthDate]);

  return (
    <div>
      <h1>N4</h1>
      <p>Вводите в порядке "Месяц-Дата-Год"</p>
      <input type="text" placeholder="ММ.ДД.ГГГГ" value={birthDate} onChange={handleChange} />
      <p>Вы прожили: {secondsLived} секунды</p>
    </div>
  );
};