import React from 'react';
import { Route } from 'react-router-dom';

import InstagramStats from './containers/instagram-stats';
import Navigation from './components/navigation';

class App extends React.Component {
  render(){
    return (
      <>
        <Route path="/" component={Navigation}/>
        <Route exact path="/" component={InstagramStats}/>
      </>
    );
  }
}

export default App;
