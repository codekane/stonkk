import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams, useRouteMatch } from "react-router-dom";
import props from 'prop-types';
import ComingSoon from './ComingSoon/index.js';
export default function Content() {

  let location = useLocation();

  return (
    <Router>
      <div className="rightBarred" style={{float: "right", backgroundColor: "#3F3F3F", textAlign: "center", fontSize: "5rem", color: "white"}}>

        <Switch>


          

          <Route path='/wallstbets'>
            <ComingSoon />
          </Route>

        </Switch>

      </div>
    </Router>
  )

}
