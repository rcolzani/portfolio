import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Calculator from './pages/Calculator';

ReactGA.initialize("G-RXJQKXQNK1");

export default function Routes() {

  useEffect(() => {
    console.log('google analytics ok')
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/calculator" component={Calculator} />
      </Switch>
    </BrowserRouter>
  );
}
