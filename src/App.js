import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.scss';

function StonkQuote(data) {
  const symbol = () => { return Object.keys(data.data)[0] }
  const parsed_data = data.data[symbol()];

  return(
    <div className="stonk-query container">
      <div className="stonk-query-top row">
        <div className="col perfect-center item">
          <h2>{symbol()}</h2>
        </div>
        <div className="col perfect-center item">
          <b>{parsed_data.bid}</b>
        </div>

        <div className="col perfect-center item">
          <p>{parsed_data.regularMarketChange.toFixed(2)} ({parsed_data.regularMarketChangePercent.toFixed(2)})</p>
        </div>

      </div>
      <div className="stonk-query-bottom perfect-center">
        <p>{parsed_data.shortName}</p>
      </div>
    </div>

  )
}

function StonkSummary(data) {
  const symbol = () => { return Object.keys(data.data)[0] }
  const parsed_data = data.data[symbol()];

  const dayHigh = () => {
    console.log(parsed_data);
    return parsed_data.dayHigh;
  }

  const open = () => {
    console.log(parsed_data.open);
  }


  return (
    <div className="stonkk-container">
      <div className="stonk">
        <h2>${symbol()}</h2>
        <div className="stonkk-info">
          <p>Open: {parsed_data.open}</p>
          <p>Close: {parsed_data.bid}</p>
          <p>Low: {parsed_data.dayLow}</p>
          <p>High: {parsed_data.dayHigh}</p>
        </div>
      </div>
    </div>
  )

}

function App() {
  const [data, setData] = React.useState([]);
  const [dataKeys, setDataKeys] = React.useState([])

  const getSummary = async () => {
    const api_url = 'http://localhost:9292/api/quotes'
    let response = await fetch(api_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let json = await response.json();
    console.log(json);
    setData(json);
    return json;
  }

  const parseSummary = (arr) => {

  }


  useEffect(() => {
    (async () => {
      let res = await getSummary();
      if (res.success) {
         }
    })();
  }, [] )

  return(
    <div className="App">
      <header className="stonkk-header">
        <h1>Stonkk</h1>
      </header>

      {data.map(d => (<StonkQuote key={Object.keys(d)[0]} data={d} />))}
    </div>

  )

}

export default App;
