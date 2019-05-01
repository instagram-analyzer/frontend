import React from 'react';
import { Route } from 'react-router-dom';

import Auth from './components/auth-zero';
import Callback from './components/auth-zero/callback';
import LandingPage from './containers/landing-page';
import Dashboard from './containers/dashboard';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if(/access_token|id_token|error/.test(location.hash)){
    auth.handleAuthentication();
  }
}

class App extends React.Component {
  render(){
    return (
      <>
        <Route exact path="/" render={props => <LandingPage {...props} auth={auth}/>}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/callback" render={props => {
          handleAuthentication(props)
          return <Callback {...props}/>
        }}/>
      </>
    );
  }
}

export default App;
