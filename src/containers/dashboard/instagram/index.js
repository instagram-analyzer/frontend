import React from 'react';
import { Route } from 'react-router-dom';

import InstagramStats from './instagram-stats';
import InstagramSearch from './instagram-search';
import InstagramPostsTable from './instagram-posts-table';

export class Instagram extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/dashboard/instagram/" component={InstagramSearch}/>
        <Route exact path="/dashboard/instagram/:username" component={InstagramStats}/>
        <Route exact path="/dashboard/instagram/:username/posts" component={InstagramPostsTable}/>
        {/* <Route path="/dashboard/instagram/tracked-accounts" component={InstagramStats}/> */}
        {/* <Route path="/dashboard/instagram/saved-accounts" component={InstagramStats}/> */}
      </>
    )
  }
}

export default Instagram
