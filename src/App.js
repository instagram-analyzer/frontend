import React from 'react';
import { Route } from 'react-router-dom';

import InstagramStats from './containers/instagram-stats';

class App extends React.Component {
  render(){
    return (
      <>
        <Route exact path="/" component={InstagramStats}/>
      </>
    );
  }
}

export default App;
