import React, { useState } from "react";

export function Calculator  ()  {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [action, setAction] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  const calculateResult = () => {
    switch (action) {
      case "+":
        setResult(parseInt(num1) + parseInt(num2));
        break;
      case "-":
        setResult(parseInt(num1) - parseInt(num2));
        break;
      case "*":
        setResult(parseInt(num1) * parseInt(num2));
        break;
      case ":":
        setResult(parseInt(num1) / parseInt(num2));
        break;
      default:
        setResult("Выберите действие");
        break;
    }
  };

  return (
    <div>
        <h1>N2</h1>
        <p>Калькулятор</p>
        <p>Введите числа и выберите действие</p>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <select value={action} onChange={handleActionChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value=":">/</option>
      </select>
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={calculateResult}>Посчитать</button>
      <p>{num1} {action} {num2} = {result}</p>
    </div>
  );
};