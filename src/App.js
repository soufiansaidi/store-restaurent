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
import Branches from './Pages/Branches'
import BranchesDetails from './Pages/BranchesDetails'
import SingleProduct from './Pages/SingleProduct'

import OrderDetails from './Pages/OrderDetails'
import OrderContact from './Pages/OrderContact'
import OrderDeliveryAddress from './Pages/OrderDeliveryAddress'
import OrderPayment from './Pages/OrderPayment'

import DeliveryMode from './Pages/DeliveryMode'

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
          <Route path="/order/details"><OrderDetails /></Route>
          <Route path="/order/contact-infos"><OrderContact /></Route>
          <Route path="/order/delivery-address"><OrderDeliveryAddress /></Route>
          <Route path="/order/payment"><OrderPayment /></Route>
          <Route path="/branches"><Branches /></Route>
          <Route path="/branches-details"><BranchesDetails /></Route>

          <Route path="/delivery-mode"><DeliveryMode /></Route>
        </Switch>
      </ApplicationContextProvider>
    </Router>
  );
}

export default App;
