import React, { useState } from 'react';
import './index.scss';

const Counter = () => {

    const [count, setCount] = useState(0);
    const [counterColor, setCounterColor] = useState('#000');

    const changeCounter = (number) => {
        setCount(count + number);
        setCounterColor(number < 0 ? '#e63946' : '#2a9d8f');
    }

    const resetCounter = () => {
        setCount(0); 
        setCounterColor('#000');
    }

    return (
        <div className="App">
            <div>
                <h2>Счетчик:</h2>
                <h1 style={{color: counterColor}}>{count}</h1>
                <div>
                    <button onClick={() => changeCounter(-1)} className="minus">- 1</button>
                    <button onClick={() => changeCounter(1)} className="plus">+ 1</button>
                </div>
                <div>
                    <button onClick={() => changeCounter(-10)} className="minus">- 10</button>
                    <button onClick={() => changeCounter(10)} className="plus">+ 10</button>
                </div>
                <div>
                    <button onClick={() => changeCounter(-100)} className="minus">- 100</button>
                    <button onClick={() => changeCounter(100)} className="plus">+ 100</button>
                </div>
                <div>
                    <button onClick={() => changeCounter(-1000)} className="minus">- 1000</button>
                    <button onClick={() => changeCounter(1000)} className="plus">+ 1000</button>
                </div>
                <div>
                    <button onClick={resetCounter} className="reset">0</button>
                </div>
            </div>
        </div>
    );
}

export default Counter