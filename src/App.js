import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Includes/Header'
import Footer from './Includes/Footer'

import Home from './Pages/Home'

function App() {
  return (
    <Router>
        <Header />
        <section>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </section>
        <Footer />
    </Router>
  );
}

export default App;
