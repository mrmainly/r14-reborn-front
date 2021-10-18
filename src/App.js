import React, { useReducer } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { DispatchContext, StateContext, defaultStore } from './store/index'
import { stateReducer } from './reducer/reducer'

import HomePage from './pages/index'
import MainListFirms from './pages/mainListFirms'
import MainListGuys from './pages/mainListGuys'
import Reviews from './pages/reviews';
import SelectionGirls from './pages/selectionGirls/index'
import ViewingPage from './pages/viewingPage/index';

import Login from './pages/auth/login'
import ForgotPassword from './pages/auth/forgot-password'
import Register from './pages/auth/register';
import Verification from './pages/auth/verification'
import Activation from './pages/auth/activation';

import Profile from './pages/profile/index'
import Balance from './pages/profile/balance';
import OperationHistory from './pages/profile/operation-history'
import ServiceCost from './pages/profile/service-cost'
import TechSupport from './pages/profile/tech-support'
import VerificationPhoto from './pages/profile/verification-photo';
import Faq from './pages/profile/faq'
import CustomProfile from './pages/profile/custom-profile'

import Added from './pages/questionary/added'
import CreatingFormFirms from './pages/questionary/creating/creating-form-firms';
import CreatingFormGirl from './pages/questionary/creating/creating-form-girl';
import CreatingFormGuys from './pages/questionary/creating/creating-form-guys';

import Success from './pages/payment/success'
import Failed from './pages/payment/failed';

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, defaultStore)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Router>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/mainListFirms" component={MainListFirms} />
            <Route path="/mainListGuys" component={MainListGuys} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/selectionGirls" component={SelectionGirls} />
            <Route path="/viewingPage/:id" component={ViewingPage} />

            <Route path="/auth/Login" component={Login} />
            <Route path="/auth/forgot-password" component={ForgotPassword} />
            <Route path="/auth/register" component={Register} />
            <Route path="/auth/verification" component={Verification} />
            <Route path="/auth/activation" component={Activation} />

            <Route path="/profile" component={Profile} />
            <Route path="/balance-profile" component={Balance} />
            <Route path="/operation-history-profile" component={OperationHistory} />
            <Route path="/servic-cost-profile" component={ServiceCost} />
            <Route path="/tech-support-profile" component={TechSupport} />
            <Route path="/verification-photo-profile" component={VerificationPhoto} />
            <Route path="/faq-profile" component={Faq} />
            <Route path="/custom-profile" component={CustomProfile} />

            <Route path="/questionary/added" component={Added} />
            <Route path="/questionary/creating/creating-form-firms" component={CreatingFormFirms} />
            <Route path="/questionary/creating/creating-form-girl" component={CreatingFormGirl} />
            <Route path="/questionary/creating/creating-form-guys" component={CreatingFormGuys} />

            <Route path="/payment/success" component={Success} />
            <Route path="/payment/failed" component={Failed} />
          </Switch>
        </Router>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
