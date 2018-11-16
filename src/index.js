import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Root from './Root';
// import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import indexRoutes from './Routes/index.js';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
