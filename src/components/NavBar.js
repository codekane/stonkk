import { Link } from "react-router-dom";
export default function NavBar(props) {

  return(

    <nav id="stonkk-nav">
      <header>
        <h1>Stonkk</h1>
      </header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/analytics'>Analytics</Link></li>
      </ul>
    </nav>

  )
}
