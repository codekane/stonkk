export default function StonkQuote(data) {
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
