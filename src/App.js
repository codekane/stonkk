import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import SideBar from './components/sidebar';
import NothingYet from './components/NothingYet';
import Content from './components/content';

export default function App() {

  return(
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path='/wallstbets'>
            <div style={{display: "flex"}}>
              <SideBar />
              <Content />
            </div>
          </Route>

          <Route path='/'>
            <SideBar />
          </Route>

        </Switch>

      </div>
    </Router>
  )
}
