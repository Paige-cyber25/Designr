import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage/HomePage';
import SignInPage from './components/SignInPage';
import CreateAccountPage from './components/CreateAccountPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ResourcesPageBeforeSignIn from './components/ResourcesPageBeforeSignIn';
import ResourcesPageAfterSignIn from './components/ResourcesPageAfterSignIn';
import AboutPage from './components/AboutPage';
import JobBoard from './components/JobBoard';
import SlackCommunity from './components/SlackCommunity';
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
              <Route exact path="/resourcesAfterSignIn" component={ResourcesPageAfterSignIn} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/jobBoard" component={JobBoard} />
              <Route exact path="/slackCommunity" component={SlackCommunity} />
      
      </Switch>

    </div>
    </Router>
    
  );
}

export default App;
