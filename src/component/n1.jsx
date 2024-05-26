import React, {useState} from "react";

export function Cityselct(){
    let [value, setValue] = useState('');
    const city = [
        {label: "Москва", value: 'Нет, это не Рио-де-Жанейро!' },
        {label: "Рио", value: '' },
        {label: "Вашингтон", value: 'Нет, это не Рио-де-Жанейро!' }
    ]
    function ff(event){
        setValue(event.target.value)
    }
    return(
        <>
            <div className="">
                <div >
                    <h1>N1</h1>
                    <p>Выберите город</p>
                    <select onChange={ff}>
                        {city.map(city => (
                            <option value={city.value}>{city.label}</option>
                        ))}
                    </select>
                    <p>{value}</p>
                </div>
            </div>
        </>
    )
}