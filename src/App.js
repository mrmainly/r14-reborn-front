import React, { useReducer } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { DispatchContext, StateContext, defaultStore } from './store/index';
import { stateReducer } from './reducer/reducer';

import Girls from './pages/girls';
import Firms from './pages/firms';
import Guys from './pages/guys';
import Reviews from './pages/reviews';
import SelectionQuestionnary from './pages/selectionQuestionnary';

import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgot-password';
import Register from './pages/auth/register';
import Verification from './pages/auth/verification';
import Activation from './pages/auth/activation';

import Profile from './pages/profile';
import Balance from './pages/profile/balance';
import OperationHistory from './pages/profile/operation-history'
import ServiceCost from './pages/profile/service-cost';
import TechSupport from './pages/profile/tech-support';
import VerificationPhoto from './pages/profile/verification-photo';
import Faq from './pages/profile/faq';
import CustomProfile from './pages/profile/custom-profile';

import Added from './pages/questionary/added'
import CreatingFormFirms from './pages/questionary/creating/creating-form-firms';
import CreatingFormGirl from './pages/questionary/creating/creating-form-girl';
import CreatingFormGuys from './pages/questionary/creating/creating-form-guys';
import QuestionnaireDetail from './pages/questionary/questionnaireDetail';

import Success from './pages/payment/success';
import Failed from './pages/payment/failed';

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, defaultStore)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Router>
          <Switch>
            <Route path="/" component={Girls} exact />
            <Route path="/mainListFirms" component={Firms} />
            <Route path="/mainListGuys" component={Guys} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/SelectionQuestionnary" component={SelectionQuestionnary} />

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
            <Route path="/viewingPage/:id" component={QuestionnaireDetail} />

            <Route path="/payment/success" component={Success} />
            <Route path="/payment/failed" component={Failed} />
          </Switch>
        </Router>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
