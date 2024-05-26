import React, { useState } from 'react';

export function Calcul  ()  {
  const [inputNumber, setInputNumber] = useState('');
  const [selectedSystem, setSelectedSystem] = useState(10);
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setInputNumber(e.target.value);
  };

  const handleSystemChange = (e) => {
    setSelectedSystem(parseInt(e.target.value));
  };

  const convertNumber = () => {
    let decimalNumber = parseInt(inputNumber, selectedSystem);
    setResult(decimalNumber.toString(2));
  };

  return (
    <div>
        <h1>N3</h1>
        <p>Введите число и выберите систему</p>
      <input type="text" value={inputNumber} onChange={handleChange} />
      <select value={selectedSystem} onChange={handleSystemChange}>
        <option value={2}>Двоичная система</option>
        <option value={10}>Десятичная система</option>
      </select>
      <button onClick={convertNumber}>Посчитать</button>
      <p>{result}</p>
    </div>
  );
};