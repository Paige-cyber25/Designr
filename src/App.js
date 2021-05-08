import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage/HomePage';
import SignInPage from './components/SignInPage';
import CreateAccountPage from './components/CreateAccountPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ResourcesPageBeforeSignIn from './components/ResourcesPageBeforeSignIn';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
           <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/signIn" component={SignInPage} />
              <Route exact path="/createAccount" component={CreateAccountPage} />
              <Route exact path="/forgotPassword" component={ForgotPasswordPage} />
              <Route exact path="/resources" component={ResourcesPageBeforeSignIn} />
      {/* <Route exact path="/welcomepage" component={WelcomePage} />
      <Route exact path="/dashboardpage" component={DashboardPage} />
      <Route exact path="/complaintspage" component={ComplaintsPage} /> */}
      </Switch>

    </div>
    </Router>
    
  );
}

export default App;
