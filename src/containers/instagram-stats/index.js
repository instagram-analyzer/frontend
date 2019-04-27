import React from 'react';

import ProfileCard from '../../components/profile-card';

export class InstagramStats extends React.Component {
  render() {
    return (
      <>
        <ProfileCard
          user_name="kieranvieira"
          full_name="Kieran Vieira"
          bio="lorem ipsum something something something something"
          bio_url="kieranvieira.com"
          follower_count="5,400"
          following_count="503"
          posts_count="45"
        />
      </>
    )
  }
}

export default InstagramStats
