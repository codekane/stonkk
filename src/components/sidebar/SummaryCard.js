import star from './FA_star.svg';

export default function SummaryCard(props) {
  const changeColor = (num) => {
    if (num > 0) { 
      return "green" }
    else if (num < 0) {
      return "#B70202"
    } else if (num == 0) { return "black" }
  }

  const changeAdjustor = (change) => {
    change = change.toFixed(2);
    if (change > 0 ) { change = "+" + change; }
    return change;
  }

  return(
    <div className="stonkSummary">
      <h3>{props.symbol}</h3>
      <div className="ssDetails">
        <p>{props.name}</p>

        <div className="bottomRow">
          <span className="count">500 <img src={star} /></span>
          <span className="price"><b>${props.price.price.toFixed(2)}</b></span>
          <span className="change" style={{color: changeColor(props.price.change)}}>{changeAdjustor(props.price.change)} </span>

        </div>
      </div>
    </div>
  )
}
