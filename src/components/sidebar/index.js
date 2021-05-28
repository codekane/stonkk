import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import SummaryCard from './SummaryCard';

export default function SideBar(props) {
  const stonks = useSelector(state => state.summary);
  let symbols = Object.keys(stonks);

  let dollarClock = (stock) => {
    let postMarket, preMarket = [false, false];
    if ( stock.hasOwnProperty('postMarketPrice')) { postMarket = true };
    if (stock.hasOwnProperty('preMarketPrice')) { preMarket = true };

    if (postMarket == true && preMarket == true) {
      let postTime = stock.postMarketTime; let preTime = stock.preMarketTime; let regTime = stock.regularMarketTime;
      if (postTime > preTime && postTime > regTime) {
        return {price: stock.postMarketPrice, change: stock.postMarketChange}
      } else if (preTime > postTime && preTime > regTime) {
        return {price: stock.preMarketPrice, change: stock.preMarketChange}
      } else if (regTime > postTime && regTime > preTime) {
        return {price: stock.regularMarketPrice, change: stock.regularMarketChange}
      }
    } else { return { price: stock.regularMarketPrice, change: stock.regularMarketChange } }
  }

  let urlPath = (sym) => {
    return `/wallstbets/${sym}`;
  }

  return(
    <div id="sidebar">
      <div className="sidebarHeader">
        <h2>/r/wallstbets</h2>
        <span>May 26, 2021  <a href="#">change date</a></span>
      </div>

      {symbols.map(symbol => (<Link to={urlPath(symbol)}><SummaryCard key={symbol} 
                               symbol={symbol}
                               name={stonks[symbol]["displayName"]}
                               price={dollarClock(stonks[symbol])}
                               count={stonks[symbol]["count"]}

      /></Link>))}
    </div>


  )
}
