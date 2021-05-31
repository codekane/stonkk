import { Link, NavLink } from "react-router-dom";
export default function NavBar(props) {

  return(

    <nav id="stonkk-nav">
      <header>
        <h1>Stonkk</h1>
      </header>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/wallstbets'>/r/wallstbets</NavLink></li>
      </ul>
    </nav>

  )
}
