import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ApplicationContextProvider } from './Context/ApplicationContext'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Menus from './Pages/Menus'
import SingleProduct from './Pages/SingleProduct'

function App() {
  return (
    <Router>
      <ApplicationContextProvider>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/sign-up"><Register /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/menus"><Menus /></Route>
          <Route path="/product-details/:slug"><SingleProduct /></Route>
        </Switch>
      </ApplicationContextProvider>
    </Router>
  );
}

export default App;
