import React from 'react';
import { Route } from 'react-router-dom';
import authHOC from '../../components/auth-hoc';

import NavBar from '../../components/navigation';
import Instagram from './instagram';

export class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Route path="/dashboard" component={NavBar}/>
        <Route path="/dashboard/instagram" component={Instagram} />
      </>
    )
  }
}

export default authHOC(Dashboard)
