import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams, useRouteMatch } from "react-router-dom";
import props from 'prop-types';
export default function Content() {

  let location = useLocation();

  return (
    <Router>
      <div className="rightBarred" style={{float: "right", backgroundColor: "#3F3F3F", textAlign: "center", fontSize: "5rem", color: "white"}}>

        <Switch>


          <Route path='/wallstbets/:sym'>
            {/*This doesn't work I give up for today seriously oh my god I need to ...}
               Seriously re-evaluate how I structure my program}*/}
          </Route>


          <Route path='/wallstbets'>
            <h3 style={{marginTop: "200px", fontSize: "3rem"}}>Select a Stonk on the Right for more Information</h3>
          </Route>

        </Switch>

      </div>
    </Router>
  )

}
