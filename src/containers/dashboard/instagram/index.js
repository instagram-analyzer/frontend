import React from 'react';
import { Route } from 'react-router-dom';

import InstagramStats from './instagram-stats';

export class Instagram extends React.Component {
  render() {
    return (
      <>
        <Route path="/dashboard/instagram/search" component={InstagramStats}/>
        <Route path="/dashboard/instagram/tracked-accounts" component={InstagramStats}/>
        <Route path="/dashboard/instagram/saved-accounts" component={InstagramStats}/>
        <Route path="/dashboard/instagram/:username" component={InstagramStats}/>
      </>
    )
  }
}

export default Instagram
