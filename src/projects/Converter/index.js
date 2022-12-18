import React, { useState, useEffect } from 'react';
import { Block } from './Block';
import './index.scss';

function Currency() {
  // Информация с сервера о курсах валюты для валюты слева
  const [rates, setRates] = useState();
  // Информация о выбранной валюте слева
  const [leftCurrency, setLeftCurrency] = useState("USD");
  // Информация о цифре валюте слева
  const [leftNumber, setLeftNumber] = useState(1);
  // Информация о выбранной валюте справа
  const [rightCurrency, setRightCurrency] = useState("RUB");
  // Информация о цифре валюте справа
  const [rightNumber, setRightNumber] = useState(0);

  const apiKey = '64b4d05a61167e4c924d75be';

  const fetchDataFromServer = (currency) => {
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
      .then((response) => response.json())
      .then((data) => { 
        setRates(data); 
        setRightNumber(leftNumber * data.conversion_rates[rightCurrency]); 
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchDataFromServer(leftCurrency);
  }, [])

  const handleChangeCurrency = (currency, windowType) => {
    if (windowType === "left") {
      if (currency !== leftCurrency) {
        setLeftCurrency(currency);
        fetchDataFromServer(currency);
      }
    } else if (windowType === "right") {
      if (currency !== rightCurrency) {
        setRightCurrency(currency);
        setRightNumber(leftNumber * rates.conversion_rates[currency]);
      }
    }
  }

  const handleChangeNumber = (number, windowType) => {
    if (windowType === "left") {
      setLeftNumber(~~number)
      setRightNumber(~~number * rates.conversion_rates[rightCurrency]);
    } else if (windowType === "right") {
      setRightNumber(~~number)
      setLeftNumber(~~number / rates.conversion_rates[rightCurrency])
    }
  }

  return (
    <div className="App">
      <Block
        value={Number.isInteger(leftNumber) ? leftNumber : leftNumber.toFixed(2)}
        currency={leftCurrency}
        onChangeCurrency={(currency) => handleChangeCurrency(currency, 'left')}
        onChangeValue={(number) => handleChangeNumber(number, 'left')}
      />

      <Block
        value={Number.isInteger(rightNumber) ? rightNumber : rightNumber.toFixed(2)}
        currency={rightCurrency}
        onChangeCurrency={(currency) => handleChangeCurrency(currency, 'right')}
        onChangeValue={(number) => handleChangeNumber(number, 'right')}
      />
    </div>
  );
}

export default Currency;