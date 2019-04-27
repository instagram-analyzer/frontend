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
          account_img="https://scontent-yyz1-1.cdninstagram.com/vp/0fd777edf7c2e64e59f1eb620bf12675/5D5D6043/t51.2885-19/s150x150/44374083_252553575613233_2079222512993959936_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com"
          follower_count="5,400"
          following_count="503"
          posts_count="45"
        />
      </>
    )
  }
}

export default InstagramStats
