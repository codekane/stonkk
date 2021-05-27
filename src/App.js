import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import StonkQuote from "./components/StonkQuote.js";
import './App.scss';

export default function App() {
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


  useEffect(() => {
    (async () => {
      let res = await getSummary();
      if (res.success) {
         }
    })();
  }, [] )

  return(
    <div className="App">
      {data.map(d => (<StonkQuote key={Object.keys(d)[0]} data={d} />))}
    </div>

  )

}
