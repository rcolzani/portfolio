import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Calculator from './pages/Calculator';

export default function Routes() {

  useEffect(() => {
    const trackingId = "G-RXJQKXQNK1"; // Replace with your Google Analytics tracking ID
    ReactGA.initialize(trackingId);
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
