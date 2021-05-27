import ReactDOM from 'react-dom';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import NavBar from './components/NavBar';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { updateSummary } from './actions';

store.dispatch(updateSummary());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route path='/analytics'>
              <h1>Placeholder for Analytics</h1>
            </Route>

            <Route path='/'>
              <App />
            </Route>

          </Switch>


        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
